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

		console.log(json.items?.[0]?.snippet?.title)
		console.log(json.items?.[0]?.snippet.thumbnails)

		const stream = await prismaClient.stream.create({
			data: {
				userId: data.createrId,
				url: data.url,
				extractedId,
				type: "Youtube"

			}
		})
		return NextResponse.json({sucess: true, id: stream.id, message: "Added Stream by the user"}, {status: 201})
	} catch(e) {
		return NextResponse.json({
			message: "Error in creating stream",
		}, {status: 411})
	}

}


export async function  GET(req: NextRequest) {
	const createrId = req.nextUrl.searchParams.get("createrId");
	const streams = await prismaClient.stream.findMany({
		where: {
			userId: createrId ?? ''
		}
	})

	return NextResponse.json({
		streams
	},{
		status: 200
	})
}