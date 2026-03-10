import React, { useEffect, useRef, useState } from 'react'

const OTPInput = ({length=4,onSubmit=()=>{}}) => {
const [otp,setOtp]=useState(new Array(length).fill(""))
    
const handleChange=(index,e)=>{
    const value=e.target.value;
    if(isNaN(value)) return;

    let newOtp=[...otp];

    // allow only one input

    newOtp[index]=value.substring(value.length-1);
    setOtp(newOtp);

    const combineOtp=newOtp.join("");
    // Submit trigger and otp send on main page
    if(combineOtp.length===length){
        onSubmit(combineOtp);
    }
    
    if(value &&  index<length-1  && inputRef.current[index+1]){
        inputRef.current[index+1].focus();
    }
}
const handelKeyDown=(index,e)=>{
    if(e.key==='Backspace' && !otp[index] && index>0  && inputRef.current[index-1]){
        inputRef.current[index-1].focus()
    }
 }
const handleClick=(index)=>{
    inputRef.current[index].setSelectionRange(1,1)

    if(index>0 && !otp[index-1]){
        inputRef.current[otp.indexOf("")].focus();
    }
     if(inputRef.current[index].value && index<length-1 && inputRef.current[index+1]){
        inputRef.current[otp.indexOf("")].focus();
    }

}

const inputRef=useRef([]);
useEffect(()=>{
    if(inputRef.current[0]){
        inputRef.current[0].focus();
    }
},[])

  return (
    <div className='container'>
        {
            otp.map((item,index)=>(
                <input
                ref={input=>(inputRef.current[index]=input)}
                key={index}
                    type='text'
                    value={item}
                    onClick={()=>handleClick(index)}
                    onChange={(e)=>handleChange(index,e)}
                    onKeyDown={(e)=>handelKeyDown(index,e)}
                    className='otpInput'
                />
            ))
        }
    </div>
  )
}

export default OTPInput