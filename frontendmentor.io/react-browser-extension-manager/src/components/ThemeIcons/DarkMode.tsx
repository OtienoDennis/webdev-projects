interface DarkModeProps {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function DarkMode({ setIsDarkMode }: DarkModeProps) {
  function toggleDark() {
    setIsDarkMode((state) => !state);
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
  }
  return (
    <img
      src='src/assets/images/icon-moon.svg'
      alt='Dark mode Icon'
      className='bg-[var(--neutral-100)] p-2 rounded-xl cursor-pointer hover:bg-[var(--neutral-300)]'
      onClick={toggleDark}
    />
  );
}

export default DarkMode;
