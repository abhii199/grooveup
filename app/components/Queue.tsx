"use client";

import { Button } from "@/components/ui/button";
import { Music2, Play, ThumbsUp } from "lucide-react";
import { useState } from "react";

const initialSongs = [
  { id: 1, title: "Blinding Lights", artist: "The Weeknd", votes: 847, voted: false },
  { id: 2, title: "Levitating", artist: "Dua Lipa", votes: 723, voted: false },
  { id: 3, title: "Save Your Tears", artist: "The Weeknd", votes: 691, voted: false },
  { id: 4, title: "Good 4 U", artist: "Olivia Rodrigo", votes: 654, voted: false },
  { id: 5, title: "Stay", artist: "The Kid LAROI & Justin Bieber", votes: 612, voted: false },
];

export function QueueSection() {
  const [songs, setSongs] = useState(initialSongs);
  const [currentlyPlaying] = useState(0);

  const handleVote = (id: number) => {
    setSongs((prevSongs) => {
      const updated = prevSongs.map((song) =>
        song.id === id
          ? { ...song, votes: song.voted ? song.votes - 1 : song.votes + 1, voted: !song.voted }
          : song
      );
      return [...updated].sort((a, b) => b.votes - a.votes);
    });
  };

  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            See It In Action
          </h2>
          <p className="text-muted-foreground text-lg">
            Try voting on songs below. Watch how the queue reorders in real-time.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
            {/* Now Playing */}
            <div className="bg-primary/10 border-b border-border p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center animate-pulse-glow">
                  <Play className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                    Now Playing
                  </p>
                  <p className="text-foreground font-semibold">
                    {songs[currentlyPlaying].title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {songs[currentlyPlaying].artist}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-primary">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="font-bold">{songs[currentlyPlaying].votes}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Queue */}
            <div className="p-4">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-4">
                Up Next
              </p>
              <div className="space-y-2">
                {songs.slice(1).map((song, index) => (
                  <div
                    key={song.id}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-300 group hover:scale-[1.01]"
                  >
                    <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-medium group-hover:bg-primary/20 group-hover:text-primary transition-all">
                      {index + 2}
                    </div>
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Music2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground font-medium truncate group-hover:text-primary transition-colors">
                        {song.title}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {song.artist}
                      </p>
                    </div>
                    <Button
                      variant={song.voted ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleVote(song.id)}
                      className={`gap-2 rounded-full transition-all duration-300 hover:scale-105 ${
                        song.voted
                          ? "bg-primary text-primary-foreground"
                          : "hover:border-primary hover:text-primary bg-transparent"
                      }`}
                    >
                      <ThumbsUp className={`w-4 h-4 transition-transform ${song.voted ? "fill-current scale-110" : ""}`} />
                      <span className="font-bold">{song.votes}</span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
