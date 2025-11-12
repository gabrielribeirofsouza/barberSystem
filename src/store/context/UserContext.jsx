import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 

  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
   
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); 
  }, []);

  
  const login = (userData) => {
  // normaliza o tipo e o nome
  const normalizedUser = {
    ...userData,
    tipo: userData.tipo?.toLowerCase()
  };

  setUser(normalizedUser);
  localStorage.setItem('user', JSON.stringify(normalizedUser));
};

  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

 
  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <UserContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}

export default UserContext;