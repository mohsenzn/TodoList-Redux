import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodoAsync } from "../redux/todoSlice";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const disptach = useDispatch();
  useEffect(() => {
    disptach(getTodoAsync());
  }, [disptach]);
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
