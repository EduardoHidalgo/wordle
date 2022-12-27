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
    if (window !== undefined) {
      try {
        const data = window.localStorage.getItem(key);
        const state: Statistics = data ? JSON.parse(data) : initialData;

        setStatistics(state);
      } catch (error) {
        console.error(error);
        setStatistics(initialData);
      }
    } else return setStatistics(initialData);
  }, []);

  const setNewStatistic = (solved: boolean) => {
    try {
      const newState = {
        played: statistics.played + 1,
        wins: solved ? statistics.wins + 1 : statistics.wins,
      };

      setStatistics(newState);

      window.localStorage.setItem(key, JSON.stringify(newState));
    } catch (error) {
      console.error(error);
    }
  };

  return { statistics, setNewStatistic };
};
