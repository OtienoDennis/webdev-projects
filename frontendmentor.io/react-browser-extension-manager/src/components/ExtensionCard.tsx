import type React from 'react';
import ToggleSwitch from './ToggleSwitch';
import type { ExtensionItemProps } from '../lib/types';
interface ExtensionItemWithToggle extends ExtensionItemProps {
  handleToggle: () => void;
}

const ExtensionCard: React.FC<ExtensionItemWithToggle> = ({
  logo,
  name,
  description,
  isActive,
  handleToggle,
}) => {
  return (
    <div className='w-full rounded-xl p-4 flex flex-col justify-between h-150px shadow-md bg-[var(--nav-background)]'>
      <div className='flex gap-4 items-center'>
        <img src={`/${logo}`} alt={name} className='w-12 h-12' />
        <div>
          <h2 className='font-bold text-[1rem] mt-2'>{name}</h2>
          <p className='text-sm'>{description}</p>
        </div>
      </div>
      <div className='flex items-center justify-between mt-6'>
        <button className=' hover:bg-[var(--red-700)] cursor-pointer text-sm dark:border-white border-1 px-3 py-[5px] rounded-3xl border-gray-400 transition'>
          Remove
        </button>
        <ToggleSwitch isActive={isActive} handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default ExtensionCard;
