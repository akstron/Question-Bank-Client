import React, { createContext, useEffect, useState } from "react";
import { getUser } from "../apiCalls/auth";

export const UserContext = createContext();

export const UserProvider = (props) => {
  
  const [user, setuser] = useState(null);

  /**
     * Below code is not working 
  */

  // useEffect(()=>{
  //   if(!user){
  //       getUser().then((res) => {
  //           if(res.status) {
  //               console.log(res.user)
  //               setuser(res.user);
  //               console.log(user,'from context')
  //           }
  //       })
  //       .catch((e) => {
  //           console.log(e);
            
  //       });
  //   } 
    
  // },[])


  return (
    <UserContext.Provider value={[user, setuser]}>
      {props.children}
    </UserContext.Provider>
  );
};
