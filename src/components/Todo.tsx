import React, { useRef, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const no = useRef(1);
  const [todo, setTodo] = useState<any>([]);
  const onDel = (id: any) => {
    setTodo(todo.filter((todo: any) => todo.id !== id));
  };
  const onAdd = (text: any) => {
    setTodo([
      ...todo,
      {
        id: no.current++,
        text,
        check: false,
      },
    ]);
  };

  return (
    <div className="Todos">
      <h2>TODO</h2>
      <TodoForm onAdd={onAdd} />
      <TodoList todo={todo} onDel={onDel} />
    </div>
  );
};

export default Todo;
