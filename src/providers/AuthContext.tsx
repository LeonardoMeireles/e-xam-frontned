import React, {createContext, useState} from 'react';

interface AuthContextType {
  user: any;
  setUser: (value: (((prevState: (object | undefined)) => (object | undefined)) | object | undefined)) => void
}

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [user, setUser] = useState<any>();

  return (
    <AuthContext.Provider value={{user: user, setUser: setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;