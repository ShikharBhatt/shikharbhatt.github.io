import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';

const messages = [
  'Hello, I am Shikhar',
  'Hallo, Ich bin Shikhar',
];

type IntervalCallback = () => void;

const useInterval = (callback: IntervalCallback, delay: number | null) => {
  const savedCallback = useRef<IntervalCallback | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => {
        if (savedCallback.current) {
          savedCallback.current();
        }
      }, delay);
      return () => clearInterval(id);
    }

    return () => {};
  }, [delay]);
};

interface GreetingProps {
  loopMessage?: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ loopMessage = false }) => {
  const hold = 50;
  const delay = 50;

  const [idx, updateIter] = useState(0);
  const [message, updateMessage] = useState(messages[0]);
  const [char, updateChar] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const tick = useCallback(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      if (loopMessage) {
        updateIter(0);
        updateChar(0);
      } else {
        setIsActive(false);
      }
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, [char, idx, loopMessage]);

  useInterval(tick, isActive ? delay : null);

  return (
    <>
      {message}
    </>
  );
};

export default Greeting;

