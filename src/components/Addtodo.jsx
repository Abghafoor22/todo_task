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
    
    <form action={addtodohandler} className="mt-8 max-w-2xl mx-auto px-4">
  <div className="flex gap-3 items-stretch shadow-lg rounded-xl bg-gray-800 p-1">
    <div className="flex-1 relative">
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-full pl-12 pr-4 py-4 text-gray-100 bg-gray-700 rounded-xl border-none focus:ring-2 focus:ring-indigo-400 focus:bg-gray-600 transition-all placeholder-gray-400"
      />
      <svg 
        className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    </div>
    <button
      type="submit"
      className="px-8 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
    >
      <svg 
        className="w-5 h-5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
      Add Task
    </button>
  </div>
</form>
    </>
  );
};

export default Addtodo;
