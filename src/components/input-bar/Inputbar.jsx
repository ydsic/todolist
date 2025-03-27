function Inputbar({todoList, setTodoList, input, setInput}) {

  function showText(e) {
    setInput(e.target.value);
  }

  function pushText() {
    if (input.trim() === "") return;
    setTodoList([...todoList, {text: input, done: false}]);
    const savedList = JSON.parse(localStorage.getItem('todolist')) || [];
    const updateList = [...savedList, {text: input, done: false}];
    localStorage.setItem('todolist', JSON.stringify(updateList));
    setInput("");
  }

  return (
    <div className="inputBar">
      <input
        type="text"
        value={input}
        onChange={showText}
        placeholder="아, 맞다! 까먹기 전에 적자"
      />
      <div className="addButton" onClick={pushText}>추가</div>
    </div>
  );
}

export default Inputbar;
