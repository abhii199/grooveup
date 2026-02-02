"use client";

import { ListMusic, Music, Shield, ThumbsUp, Users, Zap } from "lucide-react";

const features = [
  {
    icon: ThumbsUp,
    title: "Upvote System",
    description:
      "Cast your vote on any song in the queue. The most popular tracks rise to the top automatically.",
  },
  {
    icon: Music,
    title: "Vast Library",
    description:
      "Access millions of songs from all genres. Search, discover, and add tracks to the community queue.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Join rooms with friends or strangers. Experience music the way it should be - together.",
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description:
      "Watch the queue update in real-time as votes pour in. The energy is always live.",
  },
  {
    icon: ListMusic,
    title: "Smart Queue",
    description:
      "Our algorithm ensures smooth transitions and balanced playlists based on collective taste.",
  },
  {
    icon: Shield,
    title: "Moderation Tools",
    description:
      "Room admins have full control. Block songs, manage users, and keep the vibe right.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Music Democracy at Its Finest
          </h2>
          <p className="text-muted-foreground text-lg">
            Every feature designed to put the power of the playlist in your hands
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/5 opacity-0 animate-fade-in-up cursor-default"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
