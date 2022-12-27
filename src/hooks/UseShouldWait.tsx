import { useEffect, useState } from "react";

export const useShouldWait = () => {
  const [shouldWait, setShouldWait] = useState<boolean>(false);

  useEffect(() => {
    if (window !== undefined) {
      try {
        const data = window.localStorage.getItem("waiting");
        const state = data != null ? (data === "true" ? true : false) : false;

        setShouldWait(state);
      } catch (error) {
        console.error(error);
        setShouldWait(false);
      }
    } else return setShouldWait(false);
  }, []);

  const setWait = (state: boolean) => {
    window.localStorage.setItem("waiting", JSON.stringify(state));
    setShouldWait(state);
  };

  return {
    shouldWait,
    setWait,
  };
};
