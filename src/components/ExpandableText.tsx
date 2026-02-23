import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ExpandableTextProps {
  text: string;
  maxWords?: number;
  variant?: 'default' | 'hero';
}

export const ExpandableText: React.FC<ExpandableTextProps> = ({ text, maxWords = 40, variant = 'default' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = text.split(' ');
  const shouldTruncate = words.length > maxWords;

  const displayText = isExpanded || !shouldTruncate
    ? text
    : words.slice(0, maxWords).join(' ') + '...';

  const textClass = variant === 'hero'
    ? 'text-base md:text-lg text-white/80 leading-relaxed'
    : 'text-lg text-charcoal/80 leading-relaxed';

  const buttonClass = variant === 'hero'
    ? 'mt-4 flex items-center gap-2 text-white font-semibold hover:opacity-80 transition-opacity'
    : 'mt-4 flex items-center gap-2 text-brand-secondary font-semibold hover:opacity-80 transition-opacity';

  return (
    <div className="relative">
      <motion.div
        layout
        className={textClass}
      >
        {displayText}
      </motion.div>

      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={buttonClass}
        >
          {isExpanded ? (
            <>
              <span>Luk</span>
              <ChevronUp size={20} />
            </>
          ) : (
            <>
              <span>Læs mere</span>
              <ChevronDown size={20} />
            </>
          )}
        </button>
      )}
    </div>
  );
};
