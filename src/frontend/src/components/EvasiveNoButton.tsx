import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { HeartCrack } from 'lucide-react';

export default function EvasiveNoButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPositioned, setIsPositioned] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize button position on mount
  useEffect(() => {
    if (!isPositioned) {
      setIsPositioned(true);
    }
  }, [isPositioned]);

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
    </div>
  );
}
