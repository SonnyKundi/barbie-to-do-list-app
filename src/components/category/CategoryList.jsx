// CategoryList.jsx
import React from "react";
import { useSelector } from "react-redux";
import TodoList from "../TodoList";

const CategoryList = () => {
  const todosItem = useSelector((state) => state.todos.todosList);

  // Filter todos by category
  const getTodosByCategory = (category) => {
    return todosItem.filter((item) => item.category === category);
  };

  return (
    <div>
      <h2 className="text-2xl font-titleFont mb-4">Categories</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Todo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Personal</td>
            <td className="border px-4 py-2">
              <ul>
                {getTodosByCategory("personal").map((item) => (
                  <TodoList key={item._id} todo={item.todo} _id={item._id} />
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Business</td>
            <td className="border px-4 py-2">
              <ul>
                {getTodosByCategory("business").map((item) => (
                  <TodoList key={item._id} todo={item.todo} _id={item._id} />
                ))}
              </ul>
            </td>
          </tr>
          {/* Add more rows for other categories as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
