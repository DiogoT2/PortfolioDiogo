import { useState, useEffect } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export default function ScrambleText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;

    const scramble = () => {
      interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const timeout = setTimeout(scramble, 200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text]);

  return <span className="font-mono">{displayText}</span>;
}
