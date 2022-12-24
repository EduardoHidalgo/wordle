import { Key } from "../components/Key";
import { Answers } from "../types";

export interface KeyboardProps {
  answers: Answers;
  onClickDel: () => void;
  onClickEnter: () => void;
  onClickKey: (value: string) => void;
}

// eslint-disable-next-line no-empty-pattern
export const KeyboardLayout = ({
  answers,
  onClickDel,
  onClickEnter,
  onClickKey,
}: KeyboardProps) => {
  const keyRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keyRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"];
  const keyRow3 = ["Z", "x", "V", "B", "N", "M"];

  const isWrongKey = (key: string) =>
    answers
      .flat(1)
      .some((answer) => answer.word === key && answer.type === "Wrong");

  return (
    <div className="bg-[#F3F3F3] flex flex-col w-full min-w-[24rem] items-center justify-between rounded-md p-4 space-y-1">
      <div className="flex flex-row w-full space-x-1 justify-center">
        {keyRow1.map((k, i) => (
          <Key
            answer={answers.flat(1).find((a) => a.word == k)}
            isWrongKey={isWrongKey(k)}
            key={`i-${i}`}
            label={k}
            onClick={() => onClickKey(k)}
          />
        ))}
      </div>
      <div className="flex flex-row w-full space-x-1 justify-center">
        {keyRow2.map((k, i) => (
          <Key
            answer={answers.flat(1).find((a) => a.word == k)}
            isWrongKey={isWrongKey(k)}
            key={`i-${i}`}
            label={k}
            onClick={() => onClickKey(k)}
          />
        ))}
      </div>
      <div className="flex flex-row w-full space-x-1 justify-center">
        <Key label="ENTER" flex onClick={() => onClickEnter()} isControl />
        {keyRow3.map((k, i) => (
          <Key
            answer={answers.flat(1).find((a) => a.word == k)}
            isWrongKey={isWrongKey(k)}
            key={`i-${i}`}
            label={k}
            onClick={() => onClickKey(k)}
          />
        ))}

        <Key label="DEL" flex onClick={() => onClickDel()} isControl />
      </div>
    </div>
  );
};
