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

export const sendFriendRequest = async (receiverId) => {
    const res = await fetch(`${API}/user/sendFriendRequest`, {
        method: 'POST', 
        credentials: 'include', 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            receiverId
        })
    });

    return res.json();
}

export const unsendFriendRequest = async (receiverId) => {
    const res = await fetch(`${API}/user/unsendFriendRequest`, {
        method: 'POST', 
        credentials: 'include', 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            receiverId
        })
    });

    return res.json();
}

export const removeFriend = async (friendId) => {
    const res = await fetch(`${API}/user/removeFriend`, {
        method: 'DELETE', 
        credentials: 'include', 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            friendId
        })
    });

    return res.json();
}

export const respondFriendRequest = async (senderId, response) => {
    const res = await fetch(`${API}/user/respondFriendRequest`, {
        method: 'POST', 
        credentials: 'include', 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            senderId,
            response
        })
    });

    return res.json();
}