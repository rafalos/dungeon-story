import { ReactNode, createContext, useContext, useState } from 'react';

type UITriggersContextType = {
  getters: {
    energyBounce: boolean;
  };
  setters: {
    setEnergyBounce: (state: boolean) => void;
  };
};

const UITriggersContext = createContext<UITriggersContextType>({
  getters: {},
  setters: {},
} as UITriggersContextType);

const UITriggersProvider = ({ children }: { children: ReactNode }) => {
  const [energyBouncing, setEnergyBouncing] = useState(false);

  return (
    <UITriggersContext.Provider
      value={{
        getters: {
          energyBounce: energyBouncing,
        },
        setters: {
          setEnergyBounce: (state: boolean) => setEnergyBouncing(state),
        },
      }}
    >
      {children}
    </UITriggersContext.Provider>
  );
};

export const useUIGetters = () => {
  return useContext(UITriggersContext).getters;
};

export const useUISetters = () => {
  return useContext(UITriggersContext).setters;
};

export default UITriggersProvider;
