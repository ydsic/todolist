import { useEffect, useState } from "react";
import "../styles/reset.css";
import "../styles/Home.css";

import Header from "../components/Header/Title.jsx";
import "../components/Header/Title.css";

import DataList from "../components/data-list/DataList";
import "../components/data-list/DataList.css";

import Inputbar from "../components/input-bar/Inputbar";
import "../components/input-bar/Inputbar.css";

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const getList =  JSON.parse(localStorage.getItem('todolist')) || [];
    setTodoList(getList);
  }, []) 

  return (
    <>
      <Header setTodoList={setTodoList} />
      <DataList
        todoList={todoList}
        setTodoList={setTodoList}
        input={input}
        setInput={setInput}
      />
      <Inputbar
        todoList={todoList}
        setTodoList={setTodoList}
        input={input}
        setInput={setInput}
      />
    </>
  );
}

export default Home;
