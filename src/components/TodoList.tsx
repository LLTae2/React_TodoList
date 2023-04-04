import TodoItem from "./TodoItem";
import "../App.css";
import React from "react";

const TodoList = ({ todo, onDel }: any) => {
  return (
    <div className="TodoList">
      <h2>TODO LIST</h2>
      <ul className="TodoList">
        {todo &&
          todo.map((item: any, i: any) => (
            <TodoItem key={i} item={item} onDel={onDel} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
