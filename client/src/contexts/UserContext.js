import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
  const [user, setuser] = useState(null);
  return (
    <UserContext.Provider value={[user, setuser]}>
      {props.children}
    </UserContext.Provider>
  );
};
