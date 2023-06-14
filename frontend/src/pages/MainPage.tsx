import React from "react";
import List from "../components/molecules/List/List";
import AddTaskForm from "../components/atoms/AddTaskForm/AddTaskForm";
import "./MainPage.css";

export default function MainPage() {
  return (
    <>
      <h3>todo list</h3>
      <AddTaskForm type="add" task={{ id: 0, text: "", isDone: false }} />
      <List />
    </>
  );
}
