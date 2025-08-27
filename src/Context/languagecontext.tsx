// src/context/LanguageContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

// **Export the context** so it can be used elsewhere if needed
export const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  toggleLanguage: () => {},
});

// Custom hook to use the context
export const useLanguage = () => useContext(LanguageContext);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'fr' ? 'ar' : 'fr'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
