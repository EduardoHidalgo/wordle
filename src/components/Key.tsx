import classNames from "classnames";
import { Answer, AnswerType } from "../types";

export interface KeyProps {
  answer?: Answer;
  flex?: boolean;
  isControl?: boolean;
  isWrongKey?: boolean;
  label: string;
  onClick?: () => void;
}

export const Key = ({
  onClick,
  label,
  isWrongKey,
  isControl,
  flex,
  answer,
}: KeyProps) => {
  const keyColor = () => {
    if (answer) {
      switch (answer.type) {
        case AnswerType.Correct:
          return "bg-[#6AAA64]";
        case AnswerType.Nearly:
          return "bg-[#CEB02C]";
        case AnswerType.Wrong:
          return "bg-[#939B9F]";
        case AnswerType.Stateless:
        default:
          return "bg-gray-300";
      }
    }

    return "bg-gray-300";
  };

  const handleOnClick = () => {
    if (onClick) {
      if (isWrongKey) return;

      if (isControl) return onClick();

      onClick();
    }
  };

  return (
    <div
      className={classNames(
        flex ? "p-1 flex-1" : "h-8 w-8",
        keyColor(),
        "rounded-md flex justify-center items-center"
      )}
      onClick={handleOnClick}
    >
      <div className="text-xs font-semibold">{label}</div>
    </div>
  );
};
