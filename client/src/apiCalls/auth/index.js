import { API } from "../../config/backend";

export const login = async (userCredentials) => {
    console.log(`${API}/auth/login`)
    const res = await fetch(`${API}/auth/login`,{
        method:'POST',
        credentials: 'include',
        headers: {
             "Content-Type": "application/json",
           },
        body: JSON.stringify(userCredentials)
     })
    
     return res.json();
};

export const logout = async () => {
    const res = await fetch(`${API}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type' : "application/json",
        },
    });

    return res.json();
}


/**
 * Get the current logged in user
 */
export const getMe = async() => {
    const res = await fetch(`${API}/auth/me`, {
        method: 'GET',
        credentials:'include',
        headers: {
            "Content-Type": "application/json"
        }
    });

    return res.json();
}

export const register = async (userCredentials) => {
    const res = await fetch(`${API}/auth/register`,{
        method:'POST',
        credentials: 'include',
        headers: {
             "Content-Type": "application/json",
           },
        body: JSON.stringify(userCredentials)
     })
    
     return res.json();
};