import { useEffect, useState } from "react";

import { AnswerType, Answers } from "../types";
import { initialAnswers } from "../types/answers";

interface UseWordleProps {
  correctAnswer: string;
}

interface UseWordleReturn {
  answers: Answers;
  onClickDel: () => void;
  onClickEnter: () => void;
  onClickKey: (value: string) => void;
  solved: boolean | null;
  startNewGame: () => void;
}

export const useWordle = ({
  correctAnswer,
}: UseWordleProps): UseWordleReturn => {
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  // Horizontal
  const [rowIndex, setRowIndex] = useState<number>(0);
  // Each current row element
  const [index, setIndex] = useState<number>(0);
  const [solved, setSolved] = useState<boolean | null>(null);

  useEffect(() => {
    if (rowIndex === 5) showResults(false);
  }, [rowIndex]);

  const validateRowAnswer = () => {
    let copyRow = answers[rowIndex];

    let correctCount = 0;
    for (let i = 0; i < copyRow.length; i++) {
      let copyAnswer = answers[rowIndex][i];

      const word = correctAnswer[i].toLowerCase();
      const wordAnswer = copyAnswer.word.toLowerCase();

      if (word === wordAnswer) {
        copyAnswer.type = AnswerType.Correct;
        correctCount++;
      } else {
        if (correctAnswer.includes(wordAnswer))
          copyAnswer.type = AnswerType.Nearly;
        else copyAnswer.type = AnswerType.Wrong;
      }

      copyRow[i] = copyAnswer;

      setAnswers((arr) => arr.map((row, r) => (r == rowIndex ? copyRow : row)));
      setRowIndex(rowIndex + 1);
      setIndex(0);

      if (correctCount == 5) return showResults(true);
    }
  };

  const showResults = (solved: boolean) => setSolved(solved);

  const onClickDel = () => {
    if (solved !== null) return;
    if (index == 0) return;

    let copyRow = answers[rowIndex];
    let copyAnswer = answers[rowIndex][index - 1];

    copyAnswer.word = "";
    copyRow[index - 1] = copyAnswer;

    setAnswers((arr) => arr.map((row, r) => (r == rowIndex ? copyRow : row)));
    setIndex(index - 1);
  };

  const onClickEnter = () => {
    if (solved !== null) return;
    if (index == 5) validateRowAnswer();
  };

  const onClickKey = (value: string) => {
    if (index == 5) return;
    if (solved !== null) return;

    let copyRow = answers[rowIndex];
    let copyAnswer = answers[rowIndex][index];

    copyAnswer.word = value;
    copyRow[index] = copyAnswer;

    setAnswers((arr) => arr.map((row, r) => (r == rowIndex ? copyRow : row)));
    setIndex(index + 1);
  };

  const startNewGame = () => {
    const newRow = Array(5).fill({ word: "", type: AnswerType.Stateless });
    const newAnswers = JSON.parse(JSON.stringify(Array(5).fill(newRow)));

    setAnswers(newAnswers);
    setSolved(null);
    setRowIndex(0);
    setIndex(0);
  };

  return {
    answers,
    onClickDel,
    onClickEnter,
    onClickKey,
    solved,
    startNewGame,
  };
};
