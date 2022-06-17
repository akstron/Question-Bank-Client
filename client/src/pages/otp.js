import { useState } from "react";
import { verify } from "../apiCalls/auth";
import NavBar from "../comp/navbar";

const OTP = () => {

const [otp,setOtp] = useState('')
const [error, setError] = useState(false);
const [success, setSuccess] = useState(false);


const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await verify(otp);
        if(res.status){
            setSuccess('User verified')
        } else {
            setError(res.error);
        }

    } catch (err) {
        setError(err);
        console.log(err);
    }
};



    return (  

        <>
        <NavBar/>
        <main className="aq-container">
            <div className="aq">
                <h2 className="aq__heading"> OTP </h2>

                <form className="aq__form" onSubmit={handleSubmit}>

                    <div className="aq__input">
                        <label htmlFor="q-url">OTP</label>
                        <input
                            type="text"
                            id="q-otp"
                            value={otp}
                            onChange={(e) => {
                                setOtp(e.target.value)
                            }}
                            required
                        />
                    </div>

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
}
 
export default OTP;