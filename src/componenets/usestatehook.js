import React,{useState} from 'react'


function HookOne(){
  const initialValue = 0;
  const [count,setCount]=useState(initialValue)
  const AddFive=()=>{
    for(let i=0; i<5; i++){
      setCount(prevCount=>prevCount+1)
    }
  }
  return(
    <div>
      count:{count}
      <button onclick={()=>setCount(initialValue)}>Increment</button>
      <button onclick={()=>setCount(count+1)}>Increment</button>
      <button onclick={()=>setCount(count-1)}>Decrement</button>
      <button onclick={AddFive}>Increment 5</button>
    </div>
  )
}

export default HookOne