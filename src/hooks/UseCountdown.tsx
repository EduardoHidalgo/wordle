import { useEffect, useState } from "react";

interface UseCountdownReturn {
  timeout: boolean;
  getParsedCountdown: () => string;
  resetCountdown: () => void;
}

export const useCountdown = (): UseCountdownReturn => {
  const key = "countdown";

  const MIN = 5;
  const FIVE_MIN = 1000 * 60 * MIN;
  const msToNextRounded5Min = FIVE_MIN - (Date.now() % FIVE_MIN);

  const [countdown, setCountdown] = useState<number>(
    new Date().getTime() + msToNextRounded5Min
  );

  useEffect(() => {
    const initial = new Date().getTime() + msToNextRounded5Min;

    if (window !== undefined) {
      try {
        const data = window.localStorage.getItem(key);
        const ms = data ? Number(data) : initial;

        if (ms < new Date().getTime()) setCountdown(initial);

        setCountdown(ms);
      } catch (error) {
        setCountdown(initial);
      }
    } else setCountdown(initial);
  }, []);

  useEffect(() => {
    if (countdown > 999) {
      const timer = setTimeout(() => {
        const newCountdown =
          new Date().getTime() + msToNextRounded5Min - new Date().getTime();

        setCountdown(newCountdown);
        window.localStorage.setItem(key, String(newCountdown));
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      window.localStorage.removeItem(key);
    }
  }, [countdown]);

  const resetCountdown = () => {
    setCountdown(new Date().getTime() + msToNextRounded5Min);
  };

  const getParsedCountdown = () => {
    let minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countdown % (1000 * 60)) / 1000);

    let minutesString = minutes >= 0 ? String(minutes) : "00";
    let secondsString = seconds >= 0 ? String(seconds) : "00";

    if (String(minutes).length === 1) minutesString = `0${minutes}`;
    if (String(seconds).length === 1) secondsString = `0${seconds}`;

    if (minutes > MIN)
      minutesString = String(MIN).length == 1 ? `0${MIN}` : String(MIN);

    return `${minutesString}:${secondsString}`;
  };

  return {
    timeout: countdown < 999 ? true : false,
    getParsedCountdown,
    resetCountdown,
  };
};
