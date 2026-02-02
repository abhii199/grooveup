"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-16 text-center relative overflow-hidden hover:border-primary/30 transition-all duration-500">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-500" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Ready to Let Your
              <br />
              <span className="text-primary">Audience Decide?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Join thousands of music lovers who are already using VoteBeats
              to create the perfect collaborative listening experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-medium group hover:scale-105 transform duration-200 hover:shadow-lg hover:shadow-primary/25"
                >
                  Start For Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base font-medium border-border hover:bg-muted bg-transparent hover:scale-105 transform duration-200"
              >
                View Pricing
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Free forever for personal use. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
