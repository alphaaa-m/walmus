import React, { createContext, useContext, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface NavigationContextType {
  isStandalone: boolean;
  fromHome: boolean;
}

const NavigationContext = createContext<NavigationContextType>({
  isStandalone: false,
  fromHome: false,
});

export const useNavigation = () => {
  const location = useLocation();
  const state = location.state as { fromHome?: boolean } | null;
  
  // If state exists and fromHome is true, we came from home
  // If no state exists, it's a direct link (standalone)
  const fromHome = state?.fromHome === true;
  const isStandalone = !fromHome && location.pathname !== '/';

  return {
    isStandalone,
    fromHome,
  };
};

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  return <>{children}</>;
};

