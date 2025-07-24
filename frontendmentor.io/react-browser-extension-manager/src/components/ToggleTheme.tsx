import type { JSX } from 'react';
import DarkMode from './ThemeIcons/DarkMode';
import LightMode from './ThemeIcons/LightMode';

interface ToggleThemeProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function ToggleTheme({
  isDarkMode,
  setIsDarkMode,
}: ToggleThemeProps): JSX.Element {
  return (
    <div>
      {isDarkMode ? (
        <LightMode setIsDarkMode={setIsDarkMode} />
      ) : (
        <DarkMode setIsDarkMode={setIsDarkMode} />
      )}
    </div>
  );
}

export default ToggleTheme;
