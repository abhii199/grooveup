'use client';

import { Button } from '@/components/ui/button';
import { Menu, Music4, X, } from 'lucide-react';
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from 'react';



export function Navbar() {
	const session = useSession();
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/40 opacity-0 animate-fade-in-down">
			<div className="container mx-auto px-6 py-4">
				<nav className="flex justify-between items-center">

					<Link href={"/"} className='flex items-center gap-2 group'>
						<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:animate-pulse-glow transition-all">
							<Music4 className='w-4 h-4 text-white' />
						</div>
						<span className="text-xl font-bold text-foreground">VoteBeats</span>
					</Link>

					<div className="hidden md:flex items-center gap-8">
						<Link href={'#'} className='text-sm text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200'>
							Home
						</Link>

						<Link href={'/#features'} className='text-sm text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200'>
							Features
						</Link>
						<Link href={'#how-it-works'} className='text-sm text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200'>
							How it Works
						</Link>
						<Link href={'#pricing'} className='text-sm text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200'>
							Pricing
						</Link>
					</div>

					<div className="hidden md:flex items-center gap-4">
						<Link href={'/'}>
							{session.data?.user && (<Button  className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-3xl px-6 hover:scale-105 transform duration-200 hover:shadow-lg hover:shadow-primary/25'
							onClick={() => signOut()}>
							Log Out
							</Button>)}
						</Link>
						<Link href={'/dashboard'}>
							{!session.data?.user && (<Button className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-3xl px-6 hover:scale-105 transform duration-200 hover:shadow-lg hover:shadow-primary/25'
							onClick={() => signIn()}>
							Sign In
							</Button>)}
						</Link>
					</div>

					<Button variant={'ghost'} size={'icon'} className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
						{menuOpen ? < X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
					</Button>
				</nav>

				{menuOpen && (
					<div className="md:hidden pt-4 pb-2 space-y-4 animate-fade-in-down">
						<Link href={'#'} className='block text-sm text-muted-foreground hover:text-foreground'>
							Home
						</Link>
						<Link href={'#features'} className='block text-sm text-muted-foreground hover:text-foreground'>
							Features
						</Link>
						<Link href={'#how-it-works'} className='block text-sm text-muted-foreground hover:text-foreground'>
							How it Works
						</Link>
						<Link href={'#pricing'} className='block text-sm text-muted-foreground hover:text-foreground'>
							Pricing
						</Link>

						{session.data?.user && (
							<Link href={'/'}>
								<Button variant={'ghost'} className='w-full' onClick={() => signOut()}>Log Out</Button>
							</Link>
						)}

						{!session.data?.user && (
							<Link href={'/dashboard'}>
								<Button variant={'ghost'} className='w-full' onClick={() => signIn()}>Sign In</Button>
							</Link>
						)}
					</div>
				)}
			</div>
		</header>

	);
}
