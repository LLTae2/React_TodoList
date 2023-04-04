import React, { useRef, useState } from "react";
import "../App.css";

const TodoForm = ({ onAdd }: any) => {
  const textRef = useRef<any>("");
  const [text, setText] = useState<any>("");

  const changeInput = (e: any) => {
    const { value } = e.target;
    setText(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text);
    setText("");
    textRef.current.focus();
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <input
        className="TodoForm_input"
        type="text"
        value={text}
        onChange={changeInput}
        ref={textRef}
      />
      <button className="TodoForm_button" type="submit">
        추가하기
      </button>
    </form>
  );
};

export default TodoForm;
