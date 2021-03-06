import React from "react";

export default function TodoItem({ todo, onToggle, onRemove }) {
  // 모든 toggleTodo, removeTodo를 onToggle, onRemove로 변경
  const handleToggle = () => {
    onToggle(todo.id);
  };
  const handleRemove = () => {
    onRemove(todo.id);
  };
  return (
    <li>
      <span
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
        onClick={handleToggle}
      >
        {todo.text}
      </span>
      <span
        style={{ marginLeft: "2px", cursor: "pointer" }}
        onClick={handleRemove}
      >
        &times;
      </span>
    </li>
  );
}
