import React from 'react'
import { useEffect } from 'react';
import {motion} from "framer-motion"
import { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoList from '../TodoList';

const Category = () => {
     const todosItem = useSelector((state) => state.todos.todosList);
      const [personalTodos, setPersonalTodos] = useState([]);
      const [businessTodos, setBusinessTodos] = useState([]);
      const [fitness_and_healthTodos, setFitness_and_HealthTodos] = useState([]);
      const [homeTodos, setHomeTodos] = useState([]);
      const [shoppingTodos, setShoppingTodos] = useState([]);
      const [workTodos, setWorkTodos] = useState([]);
      const [othersTodos, setOthersTodos] = useState([]);

    //  Button onlick function start here
     const [activePersonal, setActivePersonal] = useState(false);
     const [activebusiness, setActiveBusiness] = useState(false);
     const [activefitness_and_health, setActiveFitness_and_Health] = useState(false);
     const [activehome, setActiveHome] = useState(false);
     const [activeshopping, setActiveShopping] = useState(false);
     const [activework, setActiveWork] = useState(false);
     const [activeothers, setActiveOthers] = useState(false);

      useEffect(()=>{
       const personalCategories = todosItem.filter(
         (item) => item.category === "personal"
       );
       setPersonalTodos(personalCategories);

       const businessCategories = todosItem.filter(
         (item) => item.category === "business"
       );
       setBusinessTodos(businessCategories);
    
       const fitness_and_healthCategories = todosItem.filter(
        (item) => item.category === "fitness_and_health"
      );
      setFitness_and_HealthTodos(fitness_and_healthCategories);

      const homeCategories = todosItem.filter(
        (item) => item.category === "home"
      );
      setHomeTodos(homeCategories);

      const shoppingCategories = todosItem.filter(
        (item) => item.category === "shopping"
      );
      setShoppingTodos(shoppingCategories);

      const workCategories = todosItem.filter(
        (item) => item.category === "work"
      );
      setWorkTodos(workCategories);
      
      const othersCategories = todosItem.filter(
        (item) => item.category === "others"
      );
       setOthersTodos(othersCategories);
      },[todosItem])
  return (
    // <div className="w-full lgl:w-[500px] h-[100px] md:h-[150px] bg-bodyColor flex flex-col md:flex-row items-center justify-start">
    <div className="w-full  h-[100px] md:h-full bg-bodyColor flex flex-col gap-4  md:flex-row items-center justify-start">
      <div className="w-full md:w-1/6 h-full">
        <button
          onClick={() =>
            setActivePersonal(true) &
            setActiveBusiness(false) &
            setActiveFitness_and_Health(false) &
            setActiveHome(false) &
            setActiveShopping(false) &
            setActiveWork(false) &
            setActiveOthers(false)
          }
          className="categoryP"
        >
          Personal
        </button>
        <button
          onClick={() =>
            setActivePersonal(false) &
            setActiveBusiness(true) &
            setActiveFitness_and_Health(false) &
            setActiveHome(false) &
            setActiveShopping(false) &
            setActiveWork(false) &
            setActiveOthers(false)
          }
          className="categoryP"
        >
          Business
        </button>
        <button
          onClick={() =>
            setActivePersonal(false) &
            setActiveBusiness(false) &
            setActiveFitness_and_Health(true) &
            setActiveHome(false) &
            setActiveShopping(false) &
            setActiveWork(false) &
            setActiveOthers(false)
          }
          className="categoryP"
        >
          Fitness_and_Health
        </button>
        <button
          onClick={() =>
            setActivePersonal(false) &
            setActiveBusiness(false) &
            setActiveFitness_and_Health(false) &
            setActiveHome(true) &
            setActiveShopping(false) &
            setActiveWork(false) &
            setActiveOthers(false)
          }
          className="categoryP"
        >
          Home
        </button>
        <button
          onClick={() =>
            setActivePersonal(false) &
            setActiveBusiness(false) &
            setActiveFitness_and_Health(false) &
            setActiveHome(false) &
            setActiveShopping(true) &
            setActiveWork(false) &
            setActiveOthers(false)
          }
          className="categoryP"
        >
          Shopping
        </button>
        <button
          onClick={() =>
            setActivePersonal(false) &
            setActiveBusiness(false) &
            setActiveFitness_and_Health(false) &
            setActiveHome(false) &
            setActiveShopping(false) &
            setActiveWork(true) &
            setActiveOthers(false)
          }
          className="categoryP"
        >
          Work
        </button>
        <button
          onClick={() =>
            setActivePersonal(false) &
            setActiveBusiness(false) &
            setActiveFitness_and_Health(false) &
            setActiveHome(false) &
            setActiveShopping(false) &
            setActiveWork(false) &
            setActiveOthers(true)
          }
          className="categoryP"
        >
          Others
        </button>
      </div>
      <div className="w-full md:w-5/6 h-full flex items-center overflow-y-scroll scrollbar-hide">
        <p
          className={`${
            activePersonal || activebusiness || activefitness_and_health || activehome || activeshopping || activework || activeothers
              ? "hidden"
              : "w-full text-center text-base font-titleFont font-semibold tracking-wider text-green-500"
          } `}
        >
          {" "}
          Click on the tab to choose your todos category
        </p>
        {/* active personal start */}
        {activePersonal && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {personalTodos.length > 0 ? (
              <>
                {personalTodos.map((item) => (
                  <>
                    <TodoList key={item._id} todo={item.todo} _id={item._id} />
                  </>
                ))}
              </>
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Personal todo list is empty!
              </motion.li>
            )}
          </ul>
        )}
        {/* business start */}
        {activebusiness && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {businessTodos.length > 0 ? (
              <>
                {businessTodos.map((item) => (
                  <TodoList key={item._id} todo={item.todo} _id={item._id} />
                ))}
              </>
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Business todo list is Empty!
              </motion.li>
            )}
          </ul>
        )}
        {/* fitness and health start */}
        {activefitness_and_health && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {fitness_and_healthTodos.length > 0 ? (
              <>
                {fitness_and_healthTodos.map((item) => (
                  <TodoList key={item._id} todo={item.todo} _id={item._id} />
                ))}
              </>
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Fitness and Health todo list is Empty!
              </motion.li>
            )}
          </ul>
        )}
        {/* home start */}
        {activehome && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {homeTodos.length > 0 ? (
              <>
                {homeTodos.map((item) => (
                  <TodoList key={item._id} todo={item.todo} _id={item._id} />
                ))}
              </>
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Home todo list is Empty!
              </motion.li>
            )}
          </ul>
        )}
        {/* shopping start */}
        {activeshopping && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {shoppingTodos.length > 0 ? (
              <>
                {shoppingTodos.map((item) => (
                  <TodoList key={item._id} todo={item.todo} _id={item._id} />
                ))}
              </>
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Shopping todo list is Empty!
              </motion.li>
            )}
          </ul>
        )}
        {/* work start */}
        {activework && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {workTodos.length > 0 ? (
              <>
                {workTodos.map((item) => (
                  <TodoList key={item._id} todo={item.todo} _id={item._id} />
                ))}
              </>
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Work todo list is Empty!
              </motion.li>
            )}
          </ul>
        )}
        {/* Others todos */}
        {activeothers && (
          <ul className="w-full h-[90%] flex flex-col items-center gap-2 px-2">
            {othersTodos.length > 0 ? (
              <>
                {othersTodos.map((item) => (
                  <TodoList key={item._id} todo={item.todo} _id={item._id} />
                ))}
              </>
            ) : (
              <motion.li
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full text-lg flex justify-center items-center text-red-500 text-center font-semibold"
              >
                Others todo list is Empty!
              </motion.li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Category;