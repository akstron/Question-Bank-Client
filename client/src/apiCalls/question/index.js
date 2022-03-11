import { API } from "../../config/backend";

export const addQuestion = async (question) => {
    const res = await fetch(`${API}/addQuestion`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            url: question.url,
            name: question.name, 
            notes: question.notes,
            tags: question.tagarray
        }),
    });

    return res.json();
};