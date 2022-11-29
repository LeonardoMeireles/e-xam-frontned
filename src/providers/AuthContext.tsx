import React, {createContext, useState} from 'react';

interface AuthContextType {
  user: any;
  setUser: (value: (((prevState: (object | undefined)) => (object | undefined)) | object | undefined)) => void;
  logOut: () => void;
}

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [user, setUser] = useState<any>(JSON.parse(localStorage.getItem('user') ?? '{}'));

  function setNewUser(user: any){
    localStorage.setItem("user",JSON.stringify(user));
    setUser(user);
  }

  function logOut() {
    localStorage.removeItem("user");
    setUser(undefined);
  }

  return (
    <AuthContext.Provider value={{user: user, setUser: setNewUser, logOut: logOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;