import React from 'react'



const Button = ({text,backgroundColor,event,disable}) => {

  const setBackgroundHandler = () =>{
        switch(backgroundColor){
            case 'black':
              return 'bg-black hover:bg-blueText';
            case 'pink' :
              return 'bg-buttonPink hover:bg-pinkText';
            default:
              return 'bg-buttonBlue hover:bg-blueText';
        }
    }

  return (
    <button  onClick={event} disabled={disable} className={`${setBackgroundHandler()} w-full py-3 px-2 justify-center transition-all text-white  ${disable ? '' : 'cursor-pointers'} flex  rounded-[0.6rem]`}>
      {text}
   
    </button>
  )
}

export default Button