import { API } from "../../config/backend";
/**
 * Use this with a user id
 */
 export const getUser = async(id) => {
    const res = await fetch(`${API}/user/getUser?userId=${id}`, {
        method:'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        }
    });

    return res.json();
}
