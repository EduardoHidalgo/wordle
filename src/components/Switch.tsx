import { Switch as HeadlessSwitch } from "@headlessui/react";
import classNames from "classnames";

export interface SwitchProps {
  state: boolean;
  onClick?: (state: boolean) => void;
}

export const Switch = ({ state, onClick }: SwitchProps) => {
  const onChange = () => {
    onClick && onClick(!state);
  };

  return (
    <HeadlessSwitch
      checked={state}
      onChange={onChange}
      className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none"
    >
      <span className="sr-only">Light/Dark Mode</span>
      <span
        aria-hidden="true"
        className={classNames(
          "pointer-events-none absolute h-full w-full rounded-md border-1 shadow-md bg-white"
        )}
      />
      <span
        aria-hidden="true"
        className={classNames(
          state ? "bg-[#262B3C]" : "bg-gray-100",
          "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"
        )}
      />
      <span
        aria-hidden="true"
        className={classNames(
          state ? "translate-x-5 bg-gray-100" : "translate-x-0 bg-[#262B3C]",
          "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-700 shadow ring-0 transition-transform duration-200 ease-in-out"
        )}
      />
    </HeadlessSwitch>
  );
};
