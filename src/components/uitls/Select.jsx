import { faCaretUp, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'



const Select = ({labelText,selectId,options,event}) => {

    const [activeInput,setActiveInput] = useState(false);

    // handlers
    const setActiveLabelHandler = (e) =>{
        const target = e.target;
        if(target.value.length){
            setActiveInput(true);            
        }else{
            setActiveInput(false);
        }
    }
    const changeInputHandler = (e) =>{
        setActiveLabelHandler(e);
        const target = e.target ;
        event(target.value)
    }
    
    return (
        <div className="border-[1px] relative rounded-[0.3rem] p-1  border-black">
            <label htmlFor={selectId} className={`absolute pointer-events-none bg-white px-[0.1rem] mx-1 text-[0.9rem] transition-all ${activeInput ? 'top-[-10px] text-[0.75rem] mx-2 ' : 'top-[50%] translate-y-[-50%]'} text-textInputGrey`}>{labelText}</label>
            <div className="w-[27px] h-[27px] bg-buttonBlue absolute pointer-events-none right-4 flex flex-col items-center justify-center text-white rounded-full  translate-y-[-50%] top-[50%]">
                <div className="relative w-[30px] h-[30px]  ">
                    <FontAwesomeIcon className='absolute left-[50%] top-[8%] translate-x-[-50%] ' icon={faCaretUp} />
                    <FontAwesomeIcon className='rotate-180 left-[50%] absolute bottom-[8%] translate-x-[-50%]  ' icon={faCaretUp} />
                </div>
            </div>
            <select onChange={changeInputHandler} className='w-full h-[30px] cursor-pointer text-[0.9rem] px-1 bg-white outline-none ' >
               {options.map((option,index)=> <option key={index} value={option.toLowerCase()}>{option}</option>)}
            </select>
        </div>
    )
}

export default Select