import {
  QuestionMarkCircleIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/solid";
import { Switch } from "../components/Switch";

export interface HeaderProps {
  isDarkMode: boolean;
  openInstructions: () => void;
  openStatistics: () => void;
  toogleDarkMode: () => void;
}

// eslint-disable-next-line no-empty-pattern
export const HeaderLayout = ({
  isDarkMode,
  openInstructions,
  openStatistics,
  toogleDarkMode,
}: HeaderProps) => {
  return (
    <div className="bg-[#F3F3F3] flex relative flex-row w-full min-w-[24rem] items-center justify-between rounded-md p-4">
      <QuestionMarkCircleIcon
        className="text-gray-500 w-6 h-6 cursor-pointer"
        onClick={openInstructions}
      />
      <div className="text-center absolute right-0 left-0 font-semibold text-3xl tracking-widest">
        WORDLE
      </div>
      <div className="space-x-2 flex flex-row items-center">
        <ChartBarSquareIcon
          className="text-gray-500 w-6 h-6 cursor-pointer"
          onClick={openStatistics}
        />
        <Switch state={isDarkMode} onClick={toogleDarkMode} />
      </div>
    </div>
  );
};
