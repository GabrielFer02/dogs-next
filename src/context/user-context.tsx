'use client';

import logout from '@/actions/logout';
import validateToken from '@/actions/validate-token';
import React from 'react';

type User = {
  id: number;
  email: string;
  username: string;
  nome: string;
};

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = React.createContext<IUserContext | null>(null);

export const useUserContext = () => {
  const context = React.useContext(UserContext);

  if (context === null)
    throw new Error('O contexto deve estar dentro do provider');

  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUser] = React.useState<User | null>(user);

  React.useEffect(() => {
    async function validate() {
      const { ok } = await validateToken();
      if (!ok) await logout();
    }
    if (userState) validate();
  }, [userState]);
  
  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
