import { WordCard } from "../components/WordCard";
import { Answers } from "../types";

export interface BoardProps {
  answers: Answers;
}

// eslint-disable-next-line no-empty-pattern
export const BoardLayout = ({ answers }: BoardProps) => {
  return (
    <div className="flex flex-col space-y-2">
      {answers.map((row) => (
        <div className="flex space-x-2">
          {row.map((answer) => (
            <WordCard word={answer.word} type={answer.type} />
          ))}
        </div>
      ))}
    </div>
  );
};
