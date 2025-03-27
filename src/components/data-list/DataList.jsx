import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DataList({todoList, setTodoList}) {
  function deleteList(deleteIndex) {
    const newList = todoList.filter((_, index) => index !== deleteIndex);
    setTodoList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  }

  function done(index) {
    const newList = todoList.map((data, i) =>
      i === index ? { ...data, done: !data.done } : data
    );
    setTodoList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  }

  return (
    <ul className="showList">
      {todoList.map((data, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={data.done}
            onChange={() => done(index)}
          />
          <p className={`list ${data.done ? "done" : ""}`}>{data.text}</p>
          <FontAwesomeIcon
            className="button"
            icon={faTrash}
            onClick={() => deleteList(index)}
          />
        </li>
      ))}
    </ul>
  );
}

export default DataList;
