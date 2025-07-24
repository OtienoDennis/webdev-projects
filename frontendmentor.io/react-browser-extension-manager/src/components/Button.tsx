import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <button className='px-3 py-[0.8px] bg-[var(--nav-background)] dark:hover:bg-gray-700 rounded-2xl cursor-pointer transition'>
      {children}
    </button>
  );
}

export default Button;

