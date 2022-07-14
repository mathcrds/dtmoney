import React, { Children, createContext, ReactNode, useState } from 'react'

interface LoginContextData {
    login: string,
    setLogin: React.Dispatch<React.SetStateAction<string>>
}

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginContext = createContext<LoginContextData>(
    {} as LoginContextData
);

export const LoginProvider = ({children}: LoginProviderProps) => {

    const [login, setLogin] = useState('');

  return (
    <LoginContext.Provider value= {{ login, setLogin}}>
        { children }
    </LoginContext.Provider>
  )
}
