import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import "./Main.css";

const Main = (props) => {
  const { mode } = useContext(AppContext);

  return (
    <div className={`Main ${mode ? "Dark" : "Light"}`}>{props.children}</div>
  );
};

export { Main };
