import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export default function FarewellPage() {
  const currentYear = new Date().getFullYear();
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Hide animation after 5 seconds
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden valentine-gradient">
      {/* Kissing animation overlay */}
      {showAnimation && (
        <div className="fixed inset-0 z-30 pointer-events-none">
          <div className="kissing-emoji kissing-emoji-1">😘</div>
          <div className="kissing-emoji kissing-emoji-2">😘</div>
          <div className="kissing-emoji kissing-emoji-3">😘</div>
          <div className="kissing-emoji kissing-emoji-4">😘</div>
          <div className="kissing-emoji kissing-emoji-5">😘</div>
          <div className="kissing-emoji kissing-emoji-6">😘</div>
          <div className="kissing-emoji kissing-emoji-7">😘</div>
          <div className="kissing-emoji kissing-emoji-8">😘</div>
        </div>
      )}

      {/* Main content */}
      <main className="relative z-20 flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="max-w-3xl w-full">
          <div className="bg-background/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-love-xl border-2 border-primary/30">
            <div className="text-center space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground leading-relaxed">
                Bye dii papa odamba pathuko,v2ku pathu poitu va , time ku saptu , Thani nariya kudi, amma kuda sanda podatha ,Nalla padi , over time la padikatha ,enndoa thangoo tha batharama pathukoo , LOVE YOU DII PAPA 😘😘😘😘😘😘😘 ,TATA 👋
              </h1>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 py-6 text-center">
        <p className="text-sm text-foreground/80 drop-shadow">
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
