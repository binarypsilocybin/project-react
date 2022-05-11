import React, { useState } from "react";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [entry, setEntry] = useState("");

  function handleEntryChange(event) {
    setEntry(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // add the new entry
    setTodos([...todos, entry]);
    // reset/empty the textbox
    setEntry("");
  }

  return (
    <div>
      <TodoForm
        entry={entry}
        onEntryChange={handleEntryChange}
        onFormSubmit={handleFormSubmit}
      />
      <TodoList todos={todos} />
    </div>
  );
}
