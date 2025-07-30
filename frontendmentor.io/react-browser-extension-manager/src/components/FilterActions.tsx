import type { FilterActionsProps } from '../lib/types';
import Button from './Button';
interface FilterActionsExtended extends FilterActionsProps {
  handleSelected: (value: string) => void;
}

export default function FilterActions({
  selected,
  setSelected,
  handleSelected,
}: FilterActionsExtended) {
  return (
    <div className='flex flex-col py-6 items-center gap-5 justify-between md:flex-row'>
      <h1 className='text-2xl'>Extensions List</h1>
      <div className='flex gap-5'>
        <Button
          selected={selected}
          setSelected={setSelected}
          handleSelected={handleSelected}>
          All
        </Button>
        <Button
          selected={selected}
          setSelected={setSelected}
          handleSelected={handleSelected}>
          Active
        </Button>
        <Button
          selected={selected}
          setSelected={setSelected}
          handleSelected={handleSelected}>
          Inactive
        </Button>
      </div>
    </div>
  );
}
