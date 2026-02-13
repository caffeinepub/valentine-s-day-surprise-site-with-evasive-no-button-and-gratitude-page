import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EvasiveNoButton from '@/components/EvasiveNoButton';

interface LandingPageProps {
  onYesClick: () => void;
}

export default function LandingPage({ onYesClick }: LandingPageProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-4">
      {/* Full-page background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url(/assets/3a6059bf59d32f6f27e0496b5424853a.jpg)' }}
      />
      
      {/* Overlay for better text readability */}
      <div className="fixed inset-0 bg-background/40 pointer-events-none" />
      
      {/* Floating hearts decoration */}
      <div className="absolute top-10 left-10 heart-float opacity-30 z-10">
        <Heart className="w-12 h-12 text-primary fill-primary" />
      </div>
      <div className="absolute top-20 right-20 heart-float opacity-20 z-10" style={{ animationDelay: '1s' }}>
        <Heart className="w-16 h-16 text-accent fill-accent" />
      </div>
      <div className="absolute bottom-20 left-1/4 heart-float opacity-25 z-10" style={{ animationDelay: '2s' }}>
        <Heart className="w-10 h-10 text-primary fill-primary" />
      </div>
      <div className="absolute bottom-32 right-1/3 heart-float opacity-20 z-10" style={{ animationDelay: '1.5s' }}>
        <Heart className="w-14 h-14 text-accent fill-accent" />
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-2xl w-full text-center space-y-12">
        {/* Heart doodle */}
        <div className="flex justify-center pulse-love">
          <img 
            src="/assets/generated/heart-doodle.dim_512x512.png" 
            alt="Heart" 
            className="w-32 h-32 md:w-40 md:h-40 drop-shadow-love"
          />
        </div>

        {/* Main question */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight tracking-tight drop-shadow-lg">
            will you be my valentine 🧡
          </h1>
          <div className="flex justify-center gap-2">
            <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" />
            <Heart className="w-6 h-6 text-accent fill-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Heart className="w-6 h-6 text-primary fill-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

        {/* Buttons container - positioned relative for the evasive button */}
        <div className="relative min-h-[200px] flex items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            {/* Yes button - stationary */}
            <Button
              onClick={onYesClick}
              size="lg"
              className="text-xl px-12 py-8 rounded-full shadow-love-lg hover:shadow-love transition-all duration-300 hover:scale-105 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Heart className="w-6 h-6 mr-2 fill-current" />
              Yes
            </Button>

            {/* No button - evasive */}
            <EvasiveNoButton />
          </div>
        </div>

        {/* Subtle hint */}
        <p className="text-sm md:text-base text-foreground/80 font-light italic drop-shadow">
          Choose wisely... 💕
        </p>
      </div>
    </div>
  );
}
