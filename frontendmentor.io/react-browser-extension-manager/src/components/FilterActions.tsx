import Button from './Button';

export default function FilterActions() {
  return (
    <div className=' flex py-6 justify-between'>
      <h1 className='text-2xl'>Extensions List</h1>
      <div className='flex gap-5'>
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Inactive</Button>
      </div>
    </div>
  );
}
