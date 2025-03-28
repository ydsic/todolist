import { useEffect, useState } from "react";
import "../styles/reset.css";
import "../styles/Home.css";

import Title from "../components/title/Title.jsx";
import "../components/title/Title.css";

import DataList from "../components/data-list/DataList";
import "../components/data-list/DataList.css";

import Inputbar from "../components/input-bar/Inputbar";
import "../components/input-bar/Inputbar.css";

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const [darkmod, setDarkMod] = useState(false);

  useEffect(() => {
    const getList = JSON.parse(localStorage.getItem("todolist")) || [];
    setDarkMod(localStorage.getItem("mod"));
    setTodoList(getList);
  }, []);

  return (
    <div className={darkmod ? "Theme_Dark" : "Theme_light"}>
      <Title
        setTodoList={setTodoList}
        darkmod={darkmod}
        setDarkMod={setDarkMod}
      />

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
    </div>
  );
}

export default Home;
