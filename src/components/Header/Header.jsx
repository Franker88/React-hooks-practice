import React, { useContext } from "react";
import "./Header.css";
import { AppContext } from "../../context/AppContext";

const Header = () => {
  const { mode, setMode } = useContext(AppContext);
  return (
    <div className="Header">
      <h1>ReactHooks</h1>
      <button
        type="button"
        onClick={() => setMode(!mode)}
        className={`switchMode ${mode ? "Dark" : "Light"}`}
      >
        {mode ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export { Header };
