import { useState } from 'react';
import '../styles/reset.css';
import '../styles/Home.css';
import TodoListData from '../components/TodoListData';

function Home() {
  const [todoList, setTodoList] = useState([]);

  return(
    <main>
      <TodoListData todoList={todoList} setTodoList={setTodoList} />
    </main>
  )
}

export default Home;