import { useRef } from "react";
import "./MenuItems.css";

function MenuItems({ onClose, setTodoList }) {
  const closeAside = useRef();
  const closeTheme = useRef();

  function resetList() {
    setTodoList([]);
    localStorage.removeItem("todolist");
  }

  function closeMenu() {
    closeAside.current.classList.add("closeMenu");
    closeTheme.current.classList.add("closeTheme");

    setTimeout(() => {
      onClose();
    }, 1000);
  }

  return (
    <>
      <aside ref={closeAside} className="menu">
        <div className="resetBtn" onClick={resetList}>
          리스트 초기화
        </div>
      </aside>
      <div ref={closeTheme} className="themeDiv">
        <p>원하는 색상을 터치하면 테마가 변경됩니다.</p>
        <div className="colorList">
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
        </div>
        <div className="closeBtn" onClick={closeMenu}>닫기</div>
      </div>
    </>
  );
}

export default MenuItems;
