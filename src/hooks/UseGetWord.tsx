import { useEffect, useState } from "react";

interface UseWordsPlayedReturn {
  wordsPlayed: Array<string>;
  addWordPlayed: (word: string) => void;
}

export const useWordsPlayed = (): UseWordsPlayedReturn => {
  const key = "wordsPlayed";

  const [wordsPlayed, setWordsPlayed] = useState<Array<string>>([]);

  useEffect(() => {
    if (window !== undefined) {
      try {
        const rawData = window.localStorage.getItem(key);
        const data = rawData ? (JSON.parse(rawData) as Object) : null;
        const list =
          data !== null ? Object.values(data).map((v) => v as string) : [];

        setWordsPlayed(list);
      } catch (error) {
        console.error(error);
        setWordsPlayed([]);
      }
    } else setWordsPlayed([]);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(wordsPlayed));
    } catch (error) {
      console.error(error);
    }
  }, [wordsPlayed]);

  const addWordPlayed = (word: string) =>
    setWordsPlayed([...wordsPlayed, word]);

  return { wordsPlayed, addWordPlayed };
};
