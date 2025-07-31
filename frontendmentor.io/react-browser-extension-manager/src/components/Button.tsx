import type { ButtonProps, FilterActionsProps } from '../lib/types';

interface ButtonPropsWithSetSelected extends ButtonProps, FilterActionsProps {
  handleSelected: (value: string) => void;
}

function Button({
  children,
  selected,
  setSelected,
  handleSelected,
}: ButtonPropsWithSetSelected) {
  function handleButton
  () {
    if (typeof children === 'string') {
      setSelected(children);
      handleSelected(children);
    }
  }
  return (
    <button
      className={`px-3 py-[0.8px]  dark:hover:bg-gray-700 rounded-2xl cursor-pointer transition duration-200 ${
        children === selected
          ? 'bg-red-600 text-white dark:text-[var(--neutral-900)] text-[18px] border-1 border-white dark:hover:bg-[var(--red-400)]'
          : 'bg-[var(--nav-background)] text-[var(--text-clr)]'
      }`}
      onClick={handleButton
      }>
      {children}
    </button>
  );
}

export default Button;
