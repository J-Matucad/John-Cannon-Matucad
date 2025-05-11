import { useEffect, useState } from "react";

export default function TypewriterText({
  words = ["Desktop Developer", "Web Developer", "Software Engineer"],
  speed = 100,
  pause = 1500,
  className = "",
}) {
  const staticChar = "A "; // The static character to stay visible

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      // Typing forward
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, speed);
      } else {
        // Full word typed
        setIsPaused(true);
        setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, pause);
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, speed / 2);
      } else {
        // Word fully deleted, go to next
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isPaused, wordIndex, words, speed, pause]);

  return (
    <div className={`font-mono whitespace-nowrap ${className}`}>
      {staticChar}
      {text}
      <span className="animate-pulse">|</span>
    </div>
  );
}
