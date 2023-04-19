import React, { useState } from "react";
import "../App.css";

export interface IProps {
  id: number;
  title: string;
  description: string;
  complete: number;
}

const TodoItem = ({ id, title, description, complete }: IProps) => {
  return (
    <li className="todoItem">
      <div className="todoItem_frontbox">
        <span
          className={complete ? "todoItem_complete" : "todoItem_incomplete"}
        >
          {complete ? "완료" : "미완료"}
        </span>
        <p className="todoItem_message">{description}</p>
      </div>
      <div className="todoItem_backbox">
        <span className="todoItem_delete" onClick={() => {}}>
          삭제하기
        </span>
        <input
          className="todoItem_checkbox"
          type="checkbox"
          onChange={() => {}}
        />
      </div>
    </li>
  );
};

export default TodoItem;
