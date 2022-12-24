import { Key } from "../components/Key";

export interface KeyboardProps {}

// eslint-disable-next-line no-empty-pattern
export const KeyboardLayout = ({}: KeyboardProps) => {
  return (
    <div className="bg-[#F3F3F3] flex flex-col w-full min-w-[24rem] items-center justify-between rounded-md p-4 space-y-1">
      <div className="flex flex-row w-full space-x-1 justify-center">
        <Key label="Q" />
        <Key label="W" />
        <Key label="E" />
        <Key label="R" />
        <Key label="T" />
        <Key label="Y" />
        <Key label="U" />
        <Key label="I" />
        <Key label="O" />
        <Key label="P" />
      </div>
      <div className="flex flex-row w-full space-x-1 justify-center">
        <Key label="A" />
        <Key label="S" />
        <Key label="D" />
        <Key label="F" />
        <Key label="G" />
        <Key label="H" />
        <Key label="J" />
        <Key label="K" />
        <Key label="L" />
        <Key label="Ñ" />
      </div>
      <div className="flex flex-row w-full space-x-1 justify-center">
        <Key label="ENTER" flex />
        <Key label="Z" />
        <Key label="X" />
        <Key label="C" />
        <Key label="V" />
        <Key label="B" />
        <Key label="N" />
        <Key label="M" />
        <Key label="DEL" flex />
      </div>
    </div>
  );
};
