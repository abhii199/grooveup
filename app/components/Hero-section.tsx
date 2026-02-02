
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance opacity-0 animate-fade-in-up">
              <span className="text-foreground">Your Vote</span>
              <br />
              <span className="text-foreground opacity-0 animate-fade-in-up animation-delay-100">Decides The</span>
              <br />
              <span className="text-muted-foreground opacity-0 animate-fade-in-up animation-delay-200">Next Beat</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-md leading-relaxed opacity-0 animate-fade-in-up animation-delay-300">
              Democracy meets music. Upvote the songs you love and watch
              them rise to the top of the queue. The crowd controls the vibe.
            </p>

            <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-in-up animation-delay-400">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-medium group hover:scale-105 transform duration-200 hover:shadow-lg hover:shadow-primary/25"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="lg"
                className="text-muted-foreground hover:text-foreground group"
              >
                See How It Works
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-4 pt-8 opacity-0 animate-fade-in-up animation-delay-500">
              <div className="bg-card border border-border rounded-2xl px-8 py-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-default">
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  520K
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Active Users
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl px-8 py-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-default">
                <div className="text-3xl md:text-4xl font-bold text-foreground">
                  89K
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  Songs Voted
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative flex items-center justify-center lg:justify-end opacity-0 animate-fade-in-right animation-delay-300">
            {/* Main Hero Image */}
            <div className="relative animate-float">
              <div className="relative w-64 md:w-80 h-96 md:h-[480px] rounded-t-full rounded-b-3xl overflow-hidden border-4 border-border/50 hover:border-primary/50 transition-all duration-500">
                <Image
                  src="/images/hero-dj.jpg"
                  alt="DJ with headphones"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Decorative sparkle */}
              <div className="absolute -top-4 -left-8 animate-spin-slow">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="text-primary"
                >
                  <path
                    d="M24 0L26.5 21.5L48 24L26.5 26.5L24 48L21.5 26.5L0 24L21.5 21.5L24 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Special Edition Badge */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-bounce-subtle hover:scale-110 transition-transform cursor-pointer">
                <div className="text-center">
                  <Star className="w-5 h-5 text-primary-foreground mx-auto" />
                  <span className="text-[10px] font-bold text-primary-foreground uppercase tracking-wider">
                    Top Voted
                  </span>
                </div>
              </div>
            </div>

            {/* Side Stats Card */}
            <div className="absolute top-8 -right-4 lg:right-0 bg-muted/80 backdrop-blur-sm rounded-full p-6 text-center opacity-0 animate-scale-in animation-delay-500 hover:scale-110 transition-transform cursor-default">
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                97%
              </div>
              <div className="text-xs text-muted-foreground mt-1 max-w-20">
                Users love the vibe
              </div>
            </div>

            {/* Microphone Image Card */}
            <div className="absolute bottom-16 -right-8 lg:right-0 w-32 md:w-40 h-40 md:h-48 rounded-t-full rounded-b-3xl overflow-hidden border-2 border-border/50 bg-gradient-to-b from-cyan-400/20 to-blue-500/20 opacity-0 animate-fade-in-up animation-delay-600 hover:scale-105 transition-transform">
              <Image
                src="/images/microphone.jpg"
                alt="Microphone"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
