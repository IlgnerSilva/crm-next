import { ReactNode, createContext, useContext, useState } from 'react';

interface MyContextData {
  hover: boolean;
  setHover: (hover: boolean) => void;
  fixed: boolean;
  setFixed: (fixed: boolean) => void;
}

const MyContext = createContext<MyContextData | undefined>(undefined);

interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  // Define o estado que será compartilhado
  const [hover, setHover] = useState(false);
  const [fixed, setFixed] = useState(false);

  const state = { hover, setHover, fixed, setFixed };

  return <MyContext.Provider value={state}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
