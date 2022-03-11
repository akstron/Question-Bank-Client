import { API } from "../../config/backend";

export const login = async (userCredentials) => {
    const res = await fetch(`${API}/login`,{
        method:'POST',
        credentials: 'include',
        headers: {
             "Content-Type": "application/json",
           },
        body: JSON.stringify(userCredentials)
     })
    
     return res.json();
};

export const getUser = async() => {
    const res = await fetch(`${API}/getUser`, {
        method:'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        }
    });

    return res.json();
}