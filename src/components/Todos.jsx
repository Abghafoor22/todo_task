import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";
import { editTodo } from "../features/todoSlice";
const Todos = () => {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  
  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  
  const handleSaveClick = (todoId) => {
    dispatch(editTodo({ id: todoId, text: editText }));
    setEditingId(null);
    setEditText("");
  };
  return (
    <div className="my-8 max-w-2xl mx-auto px-4">
  <h1 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-2">
    <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
    Your Todos
  </h1>
  
  <ul className="space-y-3">
    {todos.map((todo) => (
      <li
        className="group flex justify-between items-center bg-gray-700 px-6 py-4 rounded-xl shadow-md hover:bg-gray-600 transition-colors"
        key={todo.id}
      >
        <div className="flex-1 pr-4 text-left">
          {editingId === todo.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="w-full bg-gray-800 text-gray-100 px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400 border-none"
              autoFocus
            />
          ) : (
            <span className="text-gray-100 text-lg">{todo.text}</span>
          )}
        </div>
        
        <div className="flex gap-2 items-center">
          {editingId === todo.id ? (
            <button
              onClick={() => handleSaveClick(todo.id)}
              className="p-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => handleEditClick(todo)}
              className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          )}
          
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="p-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </li>
    ))}
  </ul>
</div>
  );
};

export default Todos;
