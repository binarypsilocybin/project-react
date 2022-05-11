import React from "react";

export default function TodoForm(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <label htmlFor="todo">Enter To do: </label>
      <input
        type="text"
        id="todo"
        value={props.entry}
        onChange={props.onEntryChange}
      />
      <input type="submit" value="Add todo" />
    </form>
  );
}
