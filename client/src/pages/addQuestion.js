import { useEffect, useState } from "react";
import "../styles/addquestion.css";
import "../styles/login.css";
import { addQuestion } from "../apiCalls/question";
import NavBar from "../comp/navbar";

// INCLUDES BOTH FUNCTIONALITY FOR ADD AND EDIT PAGES
const AddQuestion = ({text,states}) => {

    // SETTING STATES
    const [qDetails, setQDetails] = useState({
        name: "",
        url: "",
        description:"",
        difficulty:"",
        notes: "",
        tag: "",
        tagarray: [],
        visibility:''
    });

    // error for form
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [tagError, setTagError] = useState(false); //tagerror
    
    // for edit question

    const [addTags, setAddTags] = useState([])  
    const [removeTags, setRemoveTags] = useState([])

    // Updates states as prop changes from edit page
    useEffect(() => {
      
        setQDetails({...qDetails,
            name:states.name,
            url: states.url,
            description:states.description,
            difficulty:states.difficulty,
            notes: states.notes
            })
    },[states])

    // Destructuring states
    console.log(states)
        const { name, url, notes,description,difficulty, tag, tagarray } = qDetails;

// Handle form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('')
            setSuccess('')

            // for Adding question
            if(text==='Add')
            {const data = await addQuestion(qDetails);
                if(!data.status) setError(data.error)
                else {
                    setSuccess(data.message)
                    setQDetails({name: "",
                    url: "",
                    description:"",
                    difficulty:"",
                    notes: "",
                    tag: "",
                    tagarray: [],
                })
                }
            }
            // for editing question
            else {
                const data = await (qDetails);
                console.log(data)
                if(!data.status) setError(data.error)
                else {
                    setSuccess(data.message)
                    // setQDetails({name: "",
                    // url: "",
                    // description:"",
                    // difficulty:"",
                    // notes: "",
                    // tag: "",
                    // tagarray: [],
                }
            }
           
        } catch (err) {
            console.log(err);
        }
    };

    // ADD TAGS FUNCTIONS
    const handleTags = () => {
        const { tagarray, tag } = qDetails;

        tag
            ? setQDetails({ ...qDetails, tagarray: [...tagarray, tag], tag: "" })
            : setTagError(true);
        
        // for edit question
        if( text === "Edit")
       {
           if(tag) setAddTags([...addTags,tag])
       }
        
    };

    // CREATE TAGS
    const tagNames = tagarray.map((value, index) => {
        return (
            <button
                type="button"
                key={index}
                id={index}
                className="btn aq__dtags__btn"
            >
                {value}
                <span
                    onClick={(e) => {
                        const { tagarray } = qDetails;
                        tagarray.splice(e.target.parentElement.id, 1);
                        setQDetails({ ...qDetails, tagarray });
                    }}
                >
                    &#x2715;
                </span>
            </button>
        );
    });

    return (
        <>
        <NavBar/>
        <main className="aq-container">
            <div className="aq">
                <h2 className="aq__heading"> {text} Question </h2>

                <form className="aq__form" onSubmit={handleSubmit}>
                    <div className="aq__input">
                        <label htmlFor="q-title">Name of the question</label>
                        <input
                            type="text"
                            id="q-title"
                            value={name}
                            onChange={(e) => {
                                setQDetails({ ...qDetails, name: e.target.value });
                            }}
                            required
                        />
                    </div>

                    <div className="aq__input">
                        <label htmlFor="q-url">URL</label>
                        <input
                            type="text"
                            id="q-url"
                            value={url}
                            onChange={(e) => {
                                setQDetails({ ...qDetails, url: e.target.value });
                            }}
                            required
                        />
                    </div>

                    <div className="aq__input">
                        <label htmlFor="q-description">Description</label>
                        <input
                            type="text"
                            id="q-description"
                            value={description}
                            onChange={(e) => {
                                setQDetails({ ...qDetails, description: e.target.value });
                            }}
                            required
                        />
                    </div>

                    <div className="aq__input">
                        <label htmlFor="q-difficulty">Difficult Level</label>
                        <input
                            type="number"
                            id="q-difficulty"
                            value={difficulty}
                            onChange={(e) => {
                                setQDetails({ ...qDetails, difficulty: e.target.value });
                            }}
                            min="1"
                            max="10"
                            required
                        />
                    </div>


                    <div className="aq__input">
                        <label htmlFor="q-notes">Notes</label>
                        <textarea
                            id="q-notes"
                            value={notes}
                            onChange={(e) => {
                                setQDetails({ ...qDetails, notes: e.target.value });
                            }}
                            required
                        >
                            {" "}
                        </textarea>
                    </div>

                    <div className="aq__input">
                        <label className="aq__label" htmlFor="q-visibility">Question Visibility</label>
                        <select id="q-visibility" onChange={(e)=> setQDetails({ ...qDetails, visibility: e.target.value })}>
                        <option value="global">Global</option>
                        <option value="friends">Friends</option>
                        <option value="me">Me</option>
                        <option value="specific">Specific</option>
                        </select>
                    </div>

                    <div className="aq__tag">
                        <div className="aq__tag__form">
                            <label htmlFor="q-tags">
                                {text} tags{" "}
                                {tagError && !tag && <span>&#160;&#160;tag cannot be empty</span>}
                            </label>
                            <input
                                type="text"
                                id="q-tags"
                                value={tag}
                                onChange={(e) => {
                                    setQDetails({ ...qDetails, tag: e.target.value });
                                    setTagError(false);
                                }}
                            />
                        </div>


                        <button
                            type="button"
                            className="btn aq__tag__btn"
                            onClick={handleTags}
                        >
                            {text} Tag
                        </button>
                    </div>

                    <div className="aq__dtags">{tagNames}</div>

                    <button type="submit" className="btn btn_submit">
                        Submit{" "}
                    </button>
                </form>
                <p className="login__error">  {error} </p>
                <p className="login__success">  {success} </p>
            </div>
        </main>
        </>
    );
};

export default AddQuestion;
