import React from "react";
import List from "../components/molecules/List/List";
import AddTaskForm from "../components/atoms/AddTaskForm/AddTaskForm";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <h3>TodoList (React, Redux, TypeScript)</h3>
      <span>
        author: <a href="https://github.com/AntonDryuchin">Anton Dryuchin</a>
      </span>
      <AddTaskForm type="add" task={{ id: 0, text: "", isDone: false }} />
      <List />
    </>
  );
}
