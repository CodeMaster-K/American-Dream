import React from 'react';

export default function VideoStrip() {
  return (
    <section className="py-16 bg-[#050505] relative border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-primary tracking-[0.3em] uppercase">See The Experience</h2>
        </div>
        <div className="max-w-4xl mx-auto relative rounded-sm overflow-hidden p-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20">
          <div className="relative aspect-video w-full bg-black">
            <iframe 
              src="https://www.youtube.com/embed/aNQ7Gd8Hlb4?autoplay=1&mute=1&loop=1&playlist=aNQ7Gd8Hlb4" 
              title="American Dream Experience"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}