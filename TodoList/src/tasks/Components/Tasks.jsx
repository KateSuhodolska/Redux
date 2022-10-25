import React from "react";
import classNames from "classnames";

const Tasks = ({ id, text, done, onChange, onDelete }) => {
  const listItemNames = classNames("list-item", {
    "list-item_done": done,
  });

  return (
    <li className={listItemNames}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

export default Tasks;
