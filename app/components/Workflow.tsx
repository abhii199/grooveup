"use client";

import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Join a Room",
    description:
      "Create your own music room or join an existing one. Share the link with friends or open it to the public.",
  },
  {
    number: "02",
    title: "Add Songs",
    description:
      "Search our vast music library and add songs to the community queue. Everyone can contribute.",
  },
  {
    number: "03",
    title: "Vote for Favorites",
    description:
      "Upvote the songs you want to hear next. The most voted tracks automatically move to the top.",
  },
  {
    number: "04",
    title: "Enjoy Together",
    description:
      "Listen in perfect sync with everyone in the room. The crowd decides what plays next.",
  },
];

export function WorkflowSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            How VoteBeats Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Get started in minutes. No complicated setup required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {steps.map((step, index) => (
            <div key={index} className="relative opacity-0 animate-fade-in-up">
              <div className="flex flex-col items-center text-center group cursor-default">
                <div className="text-6xl font-bold text-primary/20 mb-4 group-hover:text-primary/40 transition-colors duration-300 group-hover:scale-110 transform">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 text-border group-hover:text-primary/50 transition-colors">
                  <ArrowRight className="w-8 h-8 animate-bounce-subtle" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
