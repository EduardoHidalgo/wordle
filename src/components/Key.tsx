import classNames from "classnames";

export interface KeyProps {
  flex?: boolean;
  label: string;
}

export const Key = ({ flex, label }: KeyProps) => {
  return (
    <div
      className={classNames(
        flex ? "p-1 flex-1" : "h-8 w-8",
        "bg-gray-300 rounded-md flex justify-center items-center"
      )}
    >
      <div className="text-xs font-semibold">{label}</div>
    </div>
  );
};
