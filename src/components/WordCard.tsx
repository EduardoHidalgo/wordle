import classNames from "classnames";
import { AnswerType } from "../types";

export interface WordCardProps {
  type?: keyof typeof AnswerType;
  word?: string;
}

export const WordCard = ({ type, word }: WordCardProps) => {
  const cardColor = () => {
    switch (type) {
      case AnswerType.Correct:
        return "bg-[#6AAA64]";
      case AnswerType.Nearly:
        return "bg-[#CEB02C]";
      case AnswerType.Wrong:
        return "bg-[#939B9F]";
      case AnswerType.Stateless:
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div
      className={classNames(
        "flex justify-center items-center w-14 h-14 border rounded-md",
        `${type ? cardColor() : "border-black"}`
      )}
    >
      <span className="text-3xl font-bold">{word}</span>
    </div>
  );
};
