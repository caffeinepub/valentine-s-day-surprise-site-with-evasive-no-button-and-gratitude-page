import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { HeartCrack } from 'lucide-react';

export default function EvasiveNoButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPositioned, setIsPositioned] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize button position on mount
  useEffect(() => {
    if (!isPositioned) {
      setIsPositioned(true);
    }
  }, [isPositioned]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const moveButton = () => {
    if (!buttonRef.current || !containerRef.current) return;

    const button = buttonRef.current;
    const container = containerRef.current;
    
    // Get dimensions
    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    // Calculate available space
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    
    // Generate random position with some padding
    const padding = 20;
    const newX = Math.random() * (maxX - padding * 2) + padding;
    const newY = Math.random() * (maxY - padding * 2) + padding;
    
    setPosition({ x: newX, y: newY });
  };

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    
    // Show popup
    setShowPopup(true);
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Hide popup after 2 seconds
    timeoutRef.current = setTimeout(() => {
      setShowPopup(false);
    }, 2000);
    
    // Move button
    moveButton();
  };

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ minHeight: '200px' }}
    >
      <Button
        ref={buttonRef}
        variant="outline"
        size="lg"
        onMouseEnter={handleInteraction}
        onMouseDown={handleInteraction}
        onTouchStart={handleInteraction}
        className="pointer-events-auto absolute text-xl px-12 py-8 rounded-full border-2 transition-all duration-200 hover:bg-secondary hover:border-primary font-semibold"
        style={{
          left: isPositioned ? `${position.x}px` : '50%',
          top: isPositioned ? `${position.y}px` : '50%',
          transform: !isPositioned ? 'translate(-50%, -50%)' : 'none',
        }}
      >
        <HeartCrack className="w-6 h-6 mr-2" />
        No
      </Button>
      
      {/* Pop-up message */}
      {showPopup && (
        <div
          className="absolute pointer-events-none text-sm font-medium text-foreground bg-background/90 px-4 py-2 rounded-lg shadow-lg border border-primary/20 animate-in fade-in zoom-in duration-200"
          style={{
            left: isPositioned ? `${position.x}px` : '50%',
            top: isPositioned ? `${position.y - 60}px` : 'calc(50% - 60px)',
            transform: !isPositioned ? 'translateX(-50%)' : 'none',
          }}
        >
          don't even try that
        </div>
      )}
    </div>
  );
}
