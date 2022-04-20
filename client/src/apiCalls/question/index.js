import { API } from "../../config/backend";

export const addQuestion = async (question) => {
    const res = await fetch(`${API}/question/addQuestion`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            url: question.url,
            name: question.name, 
            notes: question.notes,
            tags: question.tagarray,
            difficulty: question.difficulty,
            description: question.description
        }),
    });

    return res.json();
};

export const getQuestion = async () => {
    const res = await fetch(`${API}/question/getQuestions`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res.json();
};

export const getStats = async (query) => {

    const queryString = JSON.stringify(query);
    const url = `${API}/user/getStats?options=${queryString}`;

    const res = await fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res.json();
};

export const getQuestionById = async (id) => {
    console.log(`${API}/question/getQuestion?id=${id}`)
    const res = await fetch(`${API}/question/getQuestion?id=${id}`, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res.json();
};
