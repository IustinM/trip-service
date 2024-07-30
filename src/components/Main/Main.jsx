import React, { useState } from "react";
import Input from '../uitls/Input';
import Button from "../uitls/Button";
import Select from "../uitls/Select";
const Main = () =>{

    const [destinationValue,setDestinationValue] = useState('');
  
    const [destionationFound,setDestinationFound] = useState(0);
    const [interest,setInterest] = useState('')
    const destination = ['London','Paris', 'Berlin','Manchester','New York'];

    const interestOptions = ['A lot','Just thkinking' ,'Not really interested']
    
    console.log(destinationValue)
    const SearchDestinationHandler = () =>{
        for(let i =0;i<destination.length;i++){
            if(destination[i] === destinationValue){
                setDestinationFound(1);
                break;
            }else{
                setDestinationFound(2);
            }
        }
    }
    const ProposeDestinationHandler = () =>{
        destination.push(destinationValue)
    }
    const SelectInterestHandler = (interest) =>{
        setInterest(interest)
    }
    
    console.log(destination)

    return(
        <div className='flex flex-col items-center'>
            <h2 className=' text-[2rem] mt-[1rem]'>Choose Destination</h2>
             <div className='my-[1rem]'>
                <Input labelText={'Search destination'} inputId='1' inputValue={destinationValue} inputType='text' setInputValue={setDestinationValue} />
             </div>
            <div className='w-[200px]'>
                <Button event={SearchDestinationHandler} text='Search Destination' backgroundColor='black'  />
            </div>
            {destionationFound === 2 && 
            <div className='flex flex-col items-center my-[1rem]'>
                <p className='w-[500px] mb-[1rem] '>We don't have your destination. You can propose one destination and express your interest in it.</p>
                 <div className='w-[200px]  '>
                   <h2 className='my-[1rem]'>{destinationValue}</h2>
                   <Select labelText='How interested are you' selectId='212121' options={interestOptions} event={SelectInterestHandler}/>
                 </div>
                 <div className='w-[200px] mt-[1rem]'>
                    <Button event={ProposeDestinationHandler} text='Propose Destination' backgroundColor='black'  />
                </div>
            </div>}
        </div>
    )
}

export default Main