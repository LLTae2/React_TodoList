import axios from "axios";
import { IProps } from "../components/TodoItem";

export const addTodo = ({ id, title, description, complete }: IProps) => {
  axios
    .post("127.0.0.1:3000/addTodos", {
      id: id,
      title: title,
      description: description,
      complete: complete,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
