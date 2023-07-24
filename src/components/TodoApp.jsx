// TodoApp.jsx
import React from "react";
import CategoryList from "./category/CategoryList";
import TodoForm from "./TodoForm";
import Footer from "./Footer";

const TodoApp = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-pink-600 via-pink-400 to-pink-300 text-white">
      <div className="container mx-auto px-4 py-10">
        <TodoForm />
        <CategoryList />
        <Footer />
      </div>
    </div>
  );
};

export default TodoApp;
