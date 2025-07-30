interface ToggleSwitchProps {
  isActive: boolean;
  handleToggle: () => void;
}

function ToggleSwitch({ isActive, handleToggle }: ToggleSwitchProps) {
  return (
    <label className='inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        checked={isActive}
        onChange={handleToggle}
        className='sr-only'
      />
      <div
        className={`w-12 h-6 flex items-center  rounded-full p-1 duration-300 ease-in-out ${
          isActive ? 'bg-blue-500' : 'bg-gray-300'
        }`}>
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
            isActive ? 'translate-x-6' : ''
          }`}
        />
      </div>
    </label>
  );
}

export default ToggleSwitch;
