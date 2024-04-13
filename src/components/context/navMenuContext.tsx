import {
  useState,
  useContext,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type ContextProps = {
  children: ReactNode[];
};

export type NavContextProps = {
  hideNavState: boolean;
  setHideNavState: Dispatch<SetStateAction<boolean>>;
};

export const NavMenuContext = createContext({
  hideNavState: false,
  setHideNavState: (state: boolean) => {
    state;
  },
});

export const NavMenuContextProvider = ({ children }: ContextProps) => {
  const [hideNavState, setHideNavState] = useState<boolean>(false);

  return (
    <NavMenuContext.Provider value={{ hideNavState, setHideNavState }}>
      {children}
    </NavMenuContext.Provider>
  );
};
