export enum AnswerType {
  Correct = "Correct",
  Wrong = "Wrong",
  Nearly = "Nearly",
  Stateless = "Stateless",
}

export type Answers = Array<AnswersRow>;
export type AnswersRow = Array<Answer>;
export type Answer = {
  word: string;
  type: keyof typeof AnswerType;
};
