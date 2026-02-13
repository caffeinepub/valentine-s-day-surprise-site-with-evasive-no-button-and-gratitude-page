import { X, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RomanticNotificationOverlayProps {
  onClose: () => void;
}

export default function RomanticNotificationOverlay({ onClose }: RomanticNotificationOverlayProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm overflow-hidden">
      {/* Floating hearts decoration */}
      <div className="absolute top-10 left-10 heart-float opacity-30">
        <Heart className="w-12 h-12 text-primary fill-primary" />
      </div>
      <div className="absolute top-20 right-20 heart-float opacity-25" style={{ animationDelay: '1s' }}>
        <Heart className="w-16 h-16 text-accent fill-accent" />
      </div>
      <div className="absolute bottom-20 left-1/4 heart-float opacity-30" style={{ animationDelay: '2s' }}>
        <Heart className="w-10 h-10 text-primary fill-primary" />
      </div>
      <div className="absolute bottom-32 right-1/3 heart-float opacity-25" style={{ animationDelay: '1.5s' }}>
        <Heart className="w-14 h-14 text-accent fill-accent" />
      </div>
      <div className="absolute top-1/2 left-12 heart-float opacity-20" style={{ animationDelay: '0.5s' }}>
        <Heart className="w-8 h-8 text-primary fill-primary" />
      </div>
      <div className="absolute top-1/3 right-12 heart-float opacity-25" style={{ animationDelay: '2.5s' }}>
        <Heart className="w-12 h-12 text-accent fill-accent" />
      </div>

      {/* Sparkles decoration */}
      <div className="absolute top-1/4 left-1/3 sparkle-float opacity-40">
        <Sparkles className="w-8 h-8 text-accent fill-accent" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 sparkle-float opacity-40" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-10 h-10 text-primary fill-primary" />
      </div>
      <div className="absolute top-1/3 right-1/3 sparkle-float opacity-30" style={{ animationDelay: '1.5s' }}>
        <Sparkles className="w-6 h-6 text-accent fill-accent" />
      </div>

      {/* Notification card */}
      <div className="relative notification-card-entrance max-w-2xl w-full bg-card/95 backdrop-blur-md rounded-3xl shadow-love-xl p-8 md:p-12 border-2 border-primary/30">
        {/* Close button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 rounded-full hover:bg-primary/20 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Content */}
        <div className="text-center space-y-8">
          {/* Decorative hearts */}
          <div className="flex justify-center gap-3">
            <Heart className="w-10 h-10 text-primary fill-primary animate-pulse" />
            <Heart className="w-12 h-12 text-accent fill-accent animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Heart className="w-10 h-10 text-primary fill-primary animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>

          {/* Message */}
          <div className="space-y-4">
            <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
              that's my gurl 😘
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
              HAPPY VALENTINE'S DAY DII 🥰
            </p>
          </div>

          {/* Decorative sparkles */}
          <div className="flex justify-center gap-4 pt-4">
            <Sparkles className="w-8 h-8 text-accent fill-accent animate-pulse" />
            <Heart className="w-10 h-10 text-primary fill-primary pulse-love" />
            <Sparkles className="w-8 h-8 text-accent fill-accent animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
