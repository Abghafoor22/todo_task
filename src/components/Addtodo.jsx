import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
const Addtodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch()
  const addtodohandler = ()=>{
    
    if (input == ""){
        alert("Please Write Something To Add..")
        return
      }
    console.log(input)
    dispatch(addTodo(input))
    setInput("")
  }
  return (
    <>
    
    <form action={addtodohandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="py-2 px-4 border-1 "
          placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
         <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
     
    </form>
    </>
  );
};

export default Addtodo;
