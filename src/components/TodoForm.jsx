
import React, { useEffect, useState } from "react";
import logo from "../images/barbie.png";
import { FaAngleDown } from "react-icons/fa";
import TodoList from "./TodoList";
import ErrorMessage from "./msg/ErrorMessage";
import SuccessMsg from "./SuccessMsg";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodos, editTodos } from "../reduxStore/TodoSlice";
import { motion } from "framer-motion";

const TodoForm = () => {
  const dispatch = useDispatch();
  const todosItem = useSelector((state) => state.todos.todosList);
  const [todoValue, setTodoValue] = useState("");
  const [category, setCategory] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showErr, setShowErr] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const options = [
    {
      _id: 1000,
      title: "categories",
    },
    {
      _id: 1001,
      title: "personal",
    },
    {
      _id: 1002,
      title: "business",
    },
    {
      _id: 1003,
      title: "fitness_and_health",
    },
    {
      _id: 1004,
      title: "home",
    },
    {
      _id: 1005,
      title: "shopping",
    },
    {
      _id: 1006,
      title: "work",
    },
    {
      _id: 1007,
      title: "others",
    },
  ];

  const handleTodo = (e) => {
    e.preventDefault();
    if (todoValue === "") {
      setErrMsg("Please write your todo!");
      setShowErr(true);
    } else if (category === "") {
      setErrMsg("Select a Category");
      setShowErr(true);
    } else if (category === "categories") {
      setErrMsg("Select a valid category");
      setShowErr(true);
    } else {
      dispatch(
        addTodos({
          _id: Math.random(),
          todo: todoValue,
          category: category,
        })
      );
      setTodoValue("");
      setShowSuccess(true);
      setSuccessMsg("Todo added successfully!!");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showErr && setShowErr(false);
      showSuccess && setShowSuccess(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  // Function to handle editing the todo value in TodoList
  const handleTodoEdit = (_id, editedTodo) => {
    dispatch(editTodos({ _id, todo: editedTodo }));
  };

  return (
    <div className="w-full bg-bodyColor flex flex-col gap-4">
      <img src={logo} className="w-29 h-24 mx-auto mt-4" />
      <div className="flex items-center gap-4 h-12">
        <input
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
          className="w-[80%] h-full bg-bodyColor border-[1px] border-gray-400 py-2 px-4 placeholder:text-gray-400 text-white text-base placeholder:text-sm tracking-wide rounded-md outline-none focus-visible:border-pink-600 hover:"
          type="text"
          placeholder="Enter your Todo..."
        />
        <div className="w-[20%] h-full relative">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full h-full text-center capitalize outline-none bg-bodyColor border-[1px] border-gray-400 px-1 cursor-pointer appearance-none rounded-md focus-visible:border-pink-600 hover:border-white"
          >
            {options.map((item) => (
              <option key={item._id}>{item.title}</option>
            ))}
          </select>
          <span className="absolute right-3 top-4 ">
            <FaAngleDown />
          </span>
        </div>
      </div>
      <div class="flex justify-center items-center gap-4">
        <button
          onClick={handleTodo}
          class="w-[20%] border-[1px] bg-white border-gray-400 hover:border-gray-200 duration-300 font-titleFont font-semibold tracking-wider text-pink-600 hover:text-gray-600 h-10 uppercase rounded-md"
        >
          Add Todo
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <ul className="grid grid-cols-1 gap-4 border border-gray-600 shadow-todoShadow p-4">
          {todosItem.length > 0 ? (
            <>
              {todosItem.map((item) => (
                <TodoList
                  key={item._id}
                  todo={item.todo}
                  _id={item._id}
                  setTodoValue={(editedTodo) => handleTodoEdit(item._id, editedTodo)}
                />
              ))}
            </>
          ) : (
            <p className="text-center text-base italic text-pink-500 font-titleFont font-medium tracking-wide">
              Lazy day today?!? 😄
            </p>
          )}
        </ul>
        {todosItem.length > 0 && (
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5
            }}
            onClick={()=>setShowRemove(true)}
            className="w-40 h-8 text-sm font-titleFont text-pink-500 hover:text-red-500 font-semibold mx-auto bg-transparent border-[1px] border-gray-500 hover:border-red-500 duration-300"
          >
            Remove All Todos
          </motion.button>
        )}
      </div>
      {/* Error message */}
      {showErr && <ErrorMessage errMsg={errMsg} />}
      {/* Error message */}
      {/* Success message */}
      {showSuccess && <SuccessMsg successMsg={successMsg} />}
      {/* Success message */}

      {showRemove && (
          <div className="w-full h-screen fixed bg-bodyColor top-0 left-0 bg-opacity-60">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-bodyColor border border-pink-500 rounded-md z-50 flex flex-col gap-shadow-todoShadow">
              <p className="text-xl text-center font-medium text-red-500">Are you sure to {" "}
              <span className="font-semibold underline underline-offset-2 decoration-[1px]">remove</span>{" "}all the todos?
              </p>
              <div className="flex items-center justify-center gap-4">
                <button onClick={()=>dispatch(removeTodos()) && setShowRemove(false)}className="px-6 py-2 text-base font-titleFont text-orange-500 hover:text-red-500 font-semibold bg-transparent border-[1px] border-gray-500 hover:border-red-500 duration-300">Yes</button>
                <button onClick={()=>setShowRemove(false)}className="px-6 py-2 text-base font-titleFont text-orange-500 hover:text-green-500 font-semibold bg-transparent border-[1px] border-gray-500 hover:border-green-500 duration-300">No</button>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default TodoForm;
