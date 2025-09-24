'use client';

import { 
  createContext, 
  ReactNode, 
  useEffect, 
  useState 
} from "react";

interface AppContextProps {
  theme?: string;
  toggleTheme?: () => void;
};

const AppContext = createContext<AppContextProps>({});

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  return (
    <AppContext.Provider value={{ 
      theme,
      toggleTheme,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;