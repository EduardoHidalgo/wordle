import { useEffect, useState } from "react";

interface UseFirstGameReturn {
  isFirstGame: boolean | null;
  setFirstGame: () => void;
}

export const useFirstGame = (): UseFirstGameReturn => {
  const key = "isFirstGame";

  const [isFirstGame, setIsFirstGame] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const state =
          window.localStorage.getItem(key) === "false" ? false : true;

        setIsFirstGame(state);
      } catch (error) {
        console.error(error);
        setIsFirstGame(true);
      }
    }
  }, []);

  const setFirstGame = () => {
    try {
      setIsFirstGame(false);

      if (typeof window !== "undefined")
        window.localStorage.setItem(key, "false");
    } catch (error) {
      console.log(error);
    }
  };

  return { isFirstGame, setFirstGame };
};
