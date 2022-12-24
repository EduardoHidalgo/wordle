import { useEffect, useState } from "react";
import { Statistics } from "../types";

interface UseStatisticsReturn {
  statistics: Statistics;
  setNewStatistic: (solved: boolean) => void;
}

const initialData: Statistics = { played: 0, wins: 0 };

export const useStatistics = (): UseStatisticsReturn => {
  const key = "statistics";

  const [statistics, setStatistics] = useState<Statistics>(initialData);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const data = window.localStorage.getItem(key);
        const state: Statistics = data ? JSON.parse(data) : initialData;

        setStatistics(state);
      } catch (error) {
        console.error(error);
        setStatistics(initialData);
      }
    }
  }, []);

  const setNewStatistic = (solved: boolean) => {
    try {
      setStatistics((st) => {
        return {
          played: st.played + 1,
          wins: solved ? st.wins + 1 : st.wins,
        };
      });

      if (typeof window !== "undefined")
        window.localStorage.setItem(key, JSON.stringify(statistics));
    } catch (error) {
      console.error(error);
    }
  };

  return { statistics, setNewStatistic };
};
