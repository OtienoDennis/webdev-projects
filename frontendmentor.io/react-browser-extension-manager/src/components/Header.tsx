import { useEffect, useState, type JSX } from 'react';
// import ToggleTheme from './ToggleTheme';
import LightMode from './ThemeIcons/LightMode';
import DarkMode from './ThemeIcons/DarkMode';

function Header(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    console.log(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
      console.log(isDarkMode);
    }
  }, []);

  return (
    <div className='flex bg-[var(--nav-background)] items-center justify-between px-3 py-2 mt-4 rounded-2xl'>
      <img
        src={
          isDarkMode
            ? `src/assets/images/logo-white.svg`
            : `src/assets/images/logo.svg`
        }
        alt='logo icon'
        className='dark:text-white'
      />
      {isDarkMode ? (
        <LightMode setIsDarkMode={setIsDarkMode} />
      ) : (
        <DarkMode setIsDarkMode={setIsDarkMode} />
      )}
    </div>
  );
}

export default Header;
