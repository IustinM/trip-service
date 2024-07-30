import React, { useEffect, useState } from 'react'



const Input = ({labelText,inputId,inputValue,inputType='text',setInputValue,specialStyle=false,password=false}) => {

    const [activeInput,setActiveInput] = useState(false);
    const [viewPassword,setViewPassword] =useState(false);

    // handlers -->
    const setActiveLabelHandler = (e) =>{
        const target = e.target 
        setInputValue(target.value);
        if(target.value.length){
            setActiveInput(true);            
        }else{
            setActiveInput(false);
        }
    }   
    //this handler remove the special style of input when you click outside it
    const onBlurHandler = () =>{
        if(inputValue.length <= 0){
            setActiveInput(false)
        }
    }
    //<-- handlers 

    useEffect(()=>{
        if(inputValue.length <= 0){
            setActiveInput(false);
        }else{
            setActiveInput(true);

        }
    },[inputValue]);

    return (
        <div className={`border-[1px] relative p-[0.1rem]  ${specialStyle ? 'rounded-l-[0.3rem]' : 'rounded-[0.3rem]'} flex sm:text-[0.8rem] border-black relative `}>
            <label htmlFor={inputId} className={`absolute bg-white px-[0.1rem] ml-[0.4rem] text-[0.9rem] pointer-events-none transition-all ${activeInput ? 'top-[-10px] text-[0.8rem] text-[#426de3] ' : 'top-[50%] translate-y-[-50%]'} text-textInputGrey`}>{labelText}</label>
            <input type={password&& !viewPassword ? 'password' : inputType} value={inputValue || ''} onChange={(e)=> setActiveLabelHandler(e)} onFocus={() => setActiveInput(true)} onBlur={() => onBlurHandler()} id={inputId} name={inputId}
             className='w-full px-1 py-2 outline-none ' />
             {
                password && 
                <>
                     <div className="w-[57px] h-full"></div>
                     <div onClick={() => setViewPassword(!viewPassword)} className="bg-default-red cursor-pointer right-0 top-0 h-full flex justify-center items-center rounded-r-[0.2rem] w-[50px] text-white absolute">View</div>
                </>
             }
        </div>
    )
}

export default Input