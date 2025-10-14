"use client";

import { useEffect, useState, useRef } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number; // milliseconds per character
  startDelay?: number; // delay before starting to type
  showCursor?: boolean;
  cursorChar?: string;
  enabled?: boolean;
}

/**
 * Custom hook for typewriter effect that types text character by character
 * with optional blinking cursor
 */
export function useTypewriter({
  text,
  speed = 80,
  startDelay = 0,
  showCursor = true,
  cursorChar = "|",
  enabled,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showCursorState, setShowCursorState] = useState(showCursor);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!enabled) {
      setDisplayText(text);
      setShowCursorState(false);
      return;
    }

    // Reset state
    setDisplayText("");
    setIsTyping(false);
    setShowCursorState(showCursor);

    // Clear any existing timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Start typing after delay
    timeoutRef.current = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;

      const typeNextCharacter = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
          timeoutRef.current = setTimeout(typeNextCharacter, speed);
        } else {
          // Typing complete
          setIsTyping(false);

          // Hide cursor after typing is complete (optional)
          if (showCursor) {
            setTimeout(() => {
              setShowCursorState(false);
            }, 1000); // Hide cursor after 1 second
          }
        }
      };

      typeNextCharacter();
    }, startDelay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, speed, startDelay, enabled, showCursor]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor || !enabled) {
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current);
      }
      return;
    }

    // Start cursor blinking
    cursorIntervalRef.current = setInterval(() => {
      setShowCursorState((prev) => !prev);
    }, 530); // Blink every 530ms (standard cursor blink rate)

    return () => {
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current);
      }
    };
  }, [showCursor, enabled]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current);
      }
    };
  }, []);

  const textWithCursor =
    showCursor && (isTyping || showCursorState)
      ? `${displayText}${cursorChar}`
      : displayText;

  return {
    displayText: textWithCursor,
    isTyping,
    isComplete: displayText.length === text.length,
  };
}
