export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className="inline-flex text-center justify-center items-center rounded-md border border-transparent bg-[#6AAA64] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#51844c] focus:outline-none"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
