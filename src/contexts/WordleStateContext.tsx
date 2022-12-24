import { createContext } from "react";

export interface WordleState {
  isDarkMode: boolean;
}

export const initialWordleState: WordleState = {
  isDarkMode: false,
};

export const WordleStateContext =
  createContext<WordleState>(initialWordleState);
