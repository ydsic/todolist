import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp, faY } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

import "./Title.css";
import { useRef, useState } from "react";

function Title({ darkmod, setDarkMod }) {
  const [openList, setOpenList] = useState(false);
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("어쩌다보니 할 일이 이렇게나...?");

  const ModRef = useRef();

  const toggleList = () => {
    if (!openList) {
      setVisible(true);
      setOpenList(true);
    } else {
      setOpenList(false);
      setTimeout(() => setVisible(false), 500);
    }
  };

  function changeMod() {
    ModRef.current.classList.add("ModspinIcon");
    setDarkMod(!darkmod);
    localStorage.setItem('mod', darkmod);

    setTimeout(() => {
      ModRef.current.classList.remove("ModspinIcon");
    }, 150);
  }


  function showAlert() {
    alert('준비 중')
  }

  return (
    <>
      <header>
        <div className="toggleMenuDiv" ref={ModRef}>
          <FontAwesomeIcon
            className="toggleMenu"
            onClick={changeMod}
            icon={darkmod === true ? faSun : faMoon}
          />
        </div>

        <input
          type="text"
          className="inputTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

          <FontAwesomeIcon
            className="mode"
            onClick={toggleList}
            icon={openList ? faCaretUp : faCaretDown}
          />

      </header>

      {visible && (
        <div
          className={`otherList ${
            openList ? "showOtherList" : "closeOtherList"
          }`}
        >
          <ul>
            <li onClick={showAlert}>TodoList 추가</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Title;
