import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import "./Title.css";

function Title({ darkmod, setDarkMod }) {
  return (
    <>
      <header>
        <FontAwesomeIcon
          className="toggleMenu"
          onClick={() => setDarkMod(!darkmod)}
          icon={faMoon}
        />
        <h1>어쩌다보니 할 일이 이렇게나...?</h1>
        <FontAwesomeIcon className="mode" icon={faCaretDown} />
      </header>
    </>
  );
}

export default Title;
