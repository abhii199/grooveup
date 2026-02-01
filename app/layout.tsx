import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const geistSans = Geist({
	variable: '--font-manrope',
	subsets: ['latin']
});

const geistMono = Geist_Mono({
	variable: '--font-manrope',
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'VoteBeats - Your Vote Decides The Next Beat',
	description: 'Democracy meets music. Upvote songs to control the playlist. Join or Create rooms, vote for favorites, and enjoy music together.',
	icons: {
		icon: [
			{
				url: '/icon-32x32.png',
				media: '(prefers-color-scheme: light)'
			},
			{
				url: '/icon.svg',
				type: 'image/svg+xml'
			}
		],
		apple: '/apple-icon.png'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers>
					{children}
					<Analytics />
				</Providers>
			</body>
		</html>
	);
}
