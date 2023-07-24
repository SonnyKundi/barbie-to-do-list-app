import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodos, editTodos } from "../reduxStore/TodoSlice";

const TodoList = ({ todo, _id, setTodoValue }) => {
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleToggleComplete = () => {
    setCompleted(!completed);
  };

  const handleEdit = () => {
    if (editing) {
      // Save changes when clicking "Save" button
      setTodoValue(editedTodo);
      dispatch(editTodos({ _id, todo: editedTodo }));
    } else {
      // Start editing when clicking "Edit" button
      setEditedTodo(todo);
    }
    setEditing(!editing);
  };

  return (
    <li className={`w-full flex items-center justify-between px-2 py-1 cursor-pointer`}>
      <div
        className={`w-6 h-6 rounded-full border-2 ${
          completed ? "border-green-400 bg-green-400" : "border-pink-400 bg-pink-400"
        }`}
        onClick={handleToggleComplete}
      ></div>
      
      {/* Show different content based on editing state */}
      {editing ? (
        <div className="flex flex-grow items-center ml-2">
          <input
            type="text"
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            className="flex-grow text-pink-500 w-24 px-1 py-0.5 outline-none"
          />
        </div>
      ) : (
        <span
          className={`flex-grow ml-2 ${completed ? "line-through" : ""}`}
          onClick={handleToggleComplete}
        >
          {todo}
        </span>
      )}

      <span onClick={handleEdit} className={`text-xl duration-300 cursor-pointer mr-2 ${editing ? "text-pink-500 hover:text-pink-600" : "text-grey-300 hover:text-pink-500"}`}>
        {editing ? "Save" : "Edit"}
      </span>

      <span onClick={() => dispatch(deleteTodos(_id))} className="text-xl text-gray-300 hover:text-pink-500 duration-300 cursor-pointer">
        <MdDelete />
      </span>
    </li>
  );
};

export default TodoList;
