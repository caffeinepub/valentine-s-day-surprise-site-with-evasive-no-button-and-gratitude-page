import { useState, useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useReplyPersistence } from '../hooks/useReplyPersistence';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface ReplyPageProps {
  onNextClick: () => void;
}

export default function ReplyPage({ onNextClick }: ReplyPageProps) {
  const currentYear = new Date().getFullYear();
  const { loadedReply, isLoading, save, isSaving } = useReplyPersistence();
  const [isEditing, setIsEditing] = useState(false);
  const [draftText, setDraftText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Update draft when loadedReply changes
  useEffect(() => {
    if (loadedReply) {
      setDraftText(loadedReply);
    }
  }, [loadedReply]);

  const handleTextareaClick = () => {
    if (!isEditing) {
      setIsEditing(true);
      // Focus the textarea after state update
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 0);
    }
  };

  const handleSave = async () => {
    await save(draftText);
    setIsEditing(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Full-page background image */}
      <div 
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url(/assets/generated/75f52c353d17658b64bb2124aa702197.dim_735x735.jpg)' }}
      />
      
      {/* Overlay for better text readability */}
      <div className="fixed inset-0 bg-background/70 backdrop-blur-sm pointer-events-none" />

      {/* Main content */}
      <main className="relative z-20 flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="max-w-2xl w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight drop-shadow-lg">
              Unnaku athachu sollanum irutha sollu pa
            </h1>
          </div>

          {/* Reply box */}
          <div className="bg-background/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-love border-2 border-primary/20">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : (
              <div className="space-y-4">
                <Textarea
                  ref={textareaRef}
                  value={draftText}
                  onChange={(e) => setDraftText(e.target.value)}
                  readOnly={!isEditing}
                  onClick={handleTextareaClick}
                  className={`min-h-[300px] resize-none text-base md:text-lg bg-background/50 border-primary/30 ${
                    isEditing ? 'cursor-text' : 'cursor-pointer'
                  }`}
                  placeholder="Tap to write your reply..."
                />
                
                {isEditing && (
                  <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="w-full"
                  >
                    {isSaving ? 'Saving...' : 'Save'}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Next button */}
          <div className="flex justify-center">
            <Button
              onClick={onNextClick}
              size="lg"
              className="px-8 py-6 text-lg font-semibold"
            >
              Next
            </Button>
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
