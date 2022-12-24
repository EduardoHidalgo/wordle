import { AnswerType, Answers } from ".";

const row = Array(5).fill({ word: "", type: AnswerType.Stateless });

export const initialAnswers: Answers = JSON.parse(
  JSON.stringify(Array(5).fill(row))
);
