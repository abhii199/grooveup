import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prismaClient } from '../lib/db';


const YT_REGEX = /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:m\.)?(?:youtu(?:be)?\.com\/(?:v\/|embed\/|watch(?:\/|\?v=))|youtu\.be\/)((?:\w|-){11})(?:\S+)?$/
//spotify regex can be added later

const CreateStreamSchema = z.object({
	createrId: z.string(),
	url: z.string() //contain only youtube or spotify url
});

export async function POST(req: NextRequest) {
	try {
		//add rate limiting here cause a single user cant flood the stream
		const data = CreateStreamSchema.parse(await req.json());
		
		const isYt = YT_REGEX.test(data.url)
		if (!isYt) {
			return NextResponse.json({
				message: "Wrong YT url",
			}, {status: 411})
		}

		const extractedId = data.url.split("?v=")[1];

		const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.YTAPI}&part=snippet&id=${extractedId}`)
		const json = await res.json()

		const title = json.items?.[0]?.snippet?.title as string
		const tb = json.items?.[0]?.snippet.thumbnails

		const stream = await prismaClient.stream.create({
			data: {
				userId: data.createrId,
				url: data.url,
				extractedId,
				type: "Youtube",
				title: title ?? "Cant find the title",
				smallImage: tb.standard?.url ?? "https://cdn.dribbble.com/userupload/19072029/file/original-964d527aa2947ce15e717e7bb2f9a749.png",
				bigImage: tb.maxres?.url ?? "https://cdn.dribbble.com/userupload/19072029/file/original-964d527aa2947ce15e717e7bb2f9a749.png"
			}
		})
		return NextResponse.json({sucess: true, id: stream.id, message: "Added Stream by the user"}, {status: 201})
	} catch(e) {
		console.log(e)
		return NextResponse.json({
			message: "Error in creating stream",
		}, {status: 411})
	}

}


export async function  GET(req: NextRequest) {
	try {
		const createrId = req.nextUrl.searchParams.get("createrId");
		const streams = await prismaClient.stream.findMany({
			where: {
				userId: createrId ?? ''
			}
		})
		return NextResponse.json({streams},{status: 200})
	} catch (error) {
		return NextResponse.json({message: "Error in getting stream",}, {status: 411})
	}
}

