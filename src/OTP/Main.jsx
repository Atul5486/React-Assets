import React, { useState } from 'react'
import './style.css'
import OTPInput from './OTPInput';
const Main = () => {
    const [number, setNumber] = useState("");
    const [showOtp, setShowOtp] = useState(false);
    const [_,setOtp]=useState("");
    const handleChange = (e) => {
        setNumber(e.target.value)
    }
    const regex = /[^0-9]/;
    const handleSubmit = (e) => {
        e.preventDefault();

        if (number.length != 10 || regex.test(number)) {
            alert("Invalid number");
            return;
        }
        setShowOtp(true);
    }
    return (
        <div>
            <h1>Login with Phone</h1><br />
            {
                !showOtp ? (
                    <>
                        <input type='text'
                            onChange={handleChange}
                            value={number}
                            placeholder='Enter your phone number' />
                        <button onClick={handleSubmit}>Submit</button>
                    </>
                ) :(
                    <div>
                        <p>OTP sent to {number}</p>
                        <OTPInput onSubmit={setOtp}/>
                    </div>
                )
            }
        </div>
    )
}

export default Main