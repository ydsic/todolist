import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import MenuItems from "./menu-items/MenuItems";
import "./Title.css";

function Title({ setTodoList }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <FontAwesomeIcon
          className="toggleMenu"
          onClick={() => setIsOpen(true)}
          icon={faBars}
        />
        <h1>어쩌다보니 할 일이...?</h1>
        <FontAwesomeIcon className="mode" icon={faCaretDown} />
      </header>

      {isOpen && (
        <MenuItems setTodoList={setTodoList} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}

export default Title;
