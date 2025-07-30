interface DarkModeProps {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
function LightMode({ setIsDarkMode }: DarkModeProps) {
  function toggleDark() {
    setIsDarkMode((state) => !state);
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
  }
  return (
    <img
      src='/assets/images/icon-sun.svg'
      className='bg-[var(--neutral-600)] p-2 rounded-xl cursor-pointer dark:hover:bg-gray-700 '
      alt='Light mode Icon'
      onClick={toggleDark}
    />
  );
}

export default LightMode;
