import classNames from "classnames";

export interface WordCardProps {
  type?: "correct" | "wrong" | "nearly" | "default";
  word: string;
}

export const WordCard = ({ type, word }: WordCardProps) => {
  const cardColor = () => {
    switch (type) {
      case "correct":
        return "bg-[#6AAA64]";
      case "nearly":
        return "bg-[#CEB02C]";
      case "wrong":
        return "bg-[#939B9F]";
      case "default":
      default:
        return "bg-[#F3F3F3] ";
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
