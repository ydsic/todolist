import { useState } from "react";
import Inputbar from "./InputBar/Inputbar";
import "../styles/TodoListData.css";
import "./InputBar/Inputbar.css";
import "./DataList/DataList.css";
import "./Header/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


function TodoListData({ todoList, setTodoList }) {
  const [input, setInput] = useState("");

  function deleteList(deleteIndex) {
    const newList = todoList.filter((_, index) => index !== deleteIndex);
    setTodoList(newList);
  }

  function done(index) {
    const newList = todoList.map((data, i) => 
      i === index ? {...data, done: !data.done } : data
    );
    setTodoList(newList);
  }

  return (
    <>
 
    <header>
     <FontAwesomeIcon className="menuBar" icon={faBars} />
      <h1>어쩌다보니 할 일이...?</h1>
      <FontAwesomeIcon className="mode" icon={faCaretDown} />
    </header>
    <div className="container">
      <ul className="showList">
        {todoList.map((data, index) => (
          <li key={index}>
            <input type='checkbox' checked={data.done} onChange={() => done(index)} />
            <p className={`list ${data.done ? 'done' : ''}`}>{data.text}</p>
            <FontAwesomeIcon className="button" icon={faTrash} onClick={() => deleteList(index)} />
          </li>
        ))}
      </ul>
      
        <Inputbar todoList={todoList} setTodoList={setTodoList} input={input} setInput={setInput} />  
      </div>
    </>
  );
}

export default TodoListData;
