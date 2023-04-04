import React, { useState } from "react";
import "../App.css";

const TodoItem = ({ item, onDel }: any) => {
  const { id, text } = item;
  const [isCheck, setIsCheck] = useState(false);
  return (
    <li className="todoItem">
      <div className="todoItem_frontbox">
        <span
          className={
            isCheck === true ? "todoItem_complete" : "todoItem_incomplete"
          }
        >
          {isCheck === true ? "완료" : "미완료"}
        </span>
        <p className="todoItem_message">{text}</p>
      </div>
      <div className="todoItem_backbox">
        <span className="todoItem_delete" onClick={() => onDel(id)}>
          삭제하기
        </span>
        <input
          className="todoItem_checkbox"
          type="checkbox"
          onChange={() => {
            isCheck === false ? setIsCheck(true) : setIsCheck(false);
          }}
        />
      </div>
    </li>
  );
};

export default TodoItem;
