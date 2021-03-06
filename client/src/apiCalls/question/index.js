import { API } from "../../config/backend";

export const addQuestion = async (question) => {
    console.log(question);
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
            description: question.description, 
            visibility: question.visibility
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

export const getStats = async (userId, query) => {

    const queryString = JSON.stringify(query);
    const url = `${API}/user/getStats?options=${queryString}&userId=${userId}`;

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

export const getSearchedAndTaggedQuestions = async (question,tag) => {

    const tags = JSON.stringify(tag);
    const url = `${API}/question/getSearchedAndTaggedQuestions?prefixText=${question}&tags=${tags}`;

    const res = await fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res.json();
};

export const getSearchedQuestions = async (question) => {

    const url = `${API}/question/getSearchedQuestions?prefixText=${question}`;

    const res = await fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });

    return res.json();
};

export const deleteQuestion = async (id) => {

    const url = `${API}/question/deleteQuestion`;

    const res = await fetch(url, {
        method: "DELETE",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "questionId":`${id}`  
        })
    });

    return res.json();
};