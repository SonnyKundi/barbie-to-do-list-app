import "./index.css";
import React from "react";
import {useSelector} from 'react-redux';
import Category from "./components/category/Category";
import TodoForm from "./components/TodoForm";
import Footer from "./components/Footer";



function App() {
  const todosItem = useSelector((state) => state.todos.todosList);
  return (
    <div className="w-full min-h-screen pt-4 font-bodyFont bg-gradient-to-t from-pink-600 via-pink-400 to-pink-300 text-white px-4 flex flex-col gap-10 justify-center items-center">
       {
        todosItem.length>0?  <Category />:""
      }
      <div className="w-[850px] h-full bg-bodyColor p-10 flex flex-col gap-10">
      <TodoForm />
      <Footer/>
      </div>
    </div>
  );
}

export default App;



