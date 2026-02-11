import { Heart, Sparkles } from 'lucide-react';

export default function GratitudePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/valentine-bg-pattern.dim_1920x1080.png)' }}
      />

      {/* Floating hearts decoration */}
      <div className="absolute top-10 left-10 heart-float opacity-20">
        <Heart className="w-12 h-12 text-primary fill-primary" />
      </div>
      <div className="absolute top-32 right-16 heart-float opacity-15" style={{ animationDelay: '1s' }}>
        <Heart className="w-16 h-16 text-accent fill-accent" />
      </div>
      <div className="absolute bottom-40 left-1/4 heart-float opacity-20" style={{ animationDelay: '2s' }}>
        <Heart className="w-10 h-10 text-primary fill-primary" />
      </div>
      <div className="absolute bottom-20 right-1/3 heart-float opacity-15" style={{ animationDelay: '1.5s' }}>
        <Heart className="w-14 h-14 text-accent fill-accent" />
      </div>
      <div className="absolute top-1/2 left-12 heart-float opacity-10" style={{ animationDelay: '0.5s' }}>
        <Heart className="w-8 h-8 text-primary fill-primary" />
      </div>
      <div className="absolute top-1/3 right-12 heart-float opacity-15" style={{ animationDelay: '2.5s' }}>
        <Heart className="w-12 h-12 text-accent fill-accent" />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="max-w-3xl w-full text-center space-y-8 md:space-y-12">
          {/* Uploaded image - couple illustration */}
          <div className="flex justify-center">
            <img 
              src="/assets/2fe29e3f61a6e53093c503c181238cdc.jpg" 
              alt="Couple illustration" 
              className="w-64 h-auto md:w-80 rounded-3xl shadow-love-lg"
            />
          </div>

          {/* Celebration icon */}
          <div className="flex justify-center">
            <div className="relative pulse-love">
              <img 
                src="/assets/generated/heart-doodle.dim_512x512.png" 
                alt="Heart" 
                className="w-24 h-24 md:w-32 md:h-32 drop-shadow-love"
              />
              <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-accent fill-accent animate-pulse" />
              <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-primary fill-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Main message */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              You Made My Heart Skip a Beat!
            </h1>
            
            <div className="flex justify-center gap-2">
              <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" />
              <Heart className="w-5 h-5 text-accent fill-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-5 h-5 text-primary fill-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>

          {/* Gratitude message */}
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed font-light">
              From the moment I met you, my world became brighter. Your smile lights up my darkest days, 
              and your laughter is my favorite melody.
            </p>
            
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed font-light">
              Thank you for being the most amazing person in my life. Every moment with you is a treasure, 
              and I'm so grateful that you've chosen to share your heart with me.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed font-light">
              You are my today and all of my tomorrows. I love you more than words can express.
            </p>
          </div>

          {/* Decorative hearts */}
          <div className="flex justify-center gap-3 pt-4">
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <Heart className="w-10 h-10 text-accent fill-accent" />
            <Heart className="w-8 h-8 text-primary fill-primary" />
          </div>

          {/* Signature */}
          <div className="pt-6">
            <p className="text-xl md:text-2xl font-display italic text-foreground/80">
              Forever yours,
            </p>
            <p className="text-2xl md:text-3xl font-display font-semibold text-primary mt-2">
              Your Valentine 💕
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} · Built with <Heart className="inline w-4 h-4 text-primary fill-primary" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
