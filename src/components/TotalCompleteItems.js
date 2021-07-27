import React from "react";
import { useSelector } from "react-redux";
const TotalCompleteItems = () => {
  const todosComplete = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return <h4 className="mt-3">Total Complete Items: {todosComplete.length}</h4>;
};

export default TotalCompleteItems;
