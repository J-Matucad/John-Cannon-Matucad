import { useEffect, useState } from "react";

const scrambleChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return chars[Math.floor(Math.random() * chars.length)];
};

const AnimatedText = ({
  text,
  speed = 100,
  scrambleSpeed = 30,
  as: Tag = "h1",
  className = "",
  style = {},
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState("");

  useEffect(() => {
    if (currentIndex < text.length) {
      const targetChar = text[currentIndex];

      if (targetChar === "\n") {
        setDisplayedText((prev) => prev + "\n");
        setCurrentIndex((prev) => prev + 1);
        return;
      }

      const scrambleInterval = setInterval(() => {
        setCurrentChar(scrambleChar());
      }, scrambleSpeed);

      const lockInChar = setTimeout(() => {
        clearInterval(scrambleInterval);
        setDisplayedText((prev) => prev + targetChar);
        setCurrentChar("");
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => {
        clearInterval(scrambleInterval);
        clearTimeout(lockInChar);
      };
    }
  }, [currentIndex, text, speed, scrambleSpeed]);

  return (
    <Tag
      className={`whitespace-pre-line ${className}`}
      style={style}
    >
      {displayedText + currentChar}
    </Tag>
  );
};

export default AnimatedText;
