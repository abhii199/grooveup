'use client'

import { Music4 } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Help Center", "Community", "Contact"],
  Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
}

const Footer = () => {
  
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          <div className="col-span-2 md:col-span-1">
            <Link href={'/'} className='flex items-center gap-2 mb-4 group:'>
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:animate-pulse-glow transition-all">
                <Music4 className='w-4 h-4 text-primary-foreground'/>
              </div>
                <span className='text-lg font-bold text-foreground'>VoteBeats</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The democratic music platform where your vote shapes the playlist.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
                <h4 className="text-sm font-semibold text-foreground mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform inline-block"
                        >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            2026 VoteBeats. All rights reserved. <br/> Made with ❤️ by Abhishek.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://x.com/_abhii199"
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 transform"
              >
              Twitter
            </Link>
            <Link
              href="https://linkedin.com/abhii199/"
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 transform"
              >
              Linkedin
            </Link>
            <Link
              href="https://github.com/abhii199"
              className="text-sm text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 transform"
              >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer