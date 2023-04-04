import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";

function App() {
  const [state, setState] = useState("");
  const [string, setString] = useState("");
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);

  const HandleChange = (e: any) => {
    setState(e.target.value);
    setClick(false);
  };
  // useEffect(() => {
  //   console.info(string);
  //   getData(string);
  // }, [string])

  return <Todo />;
}
export default App;
