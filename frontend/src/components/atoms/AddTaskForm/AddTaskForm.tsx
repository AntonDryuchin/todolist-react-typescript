import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { addTask, editTask } from "../../../redux/tasks.slice";
import { ITask } from "../../../redux/types";

type IAddFormProps = {
  type: string;
  task: ITask;
  setEditFlag?: any;
};

export default function AddTaskForm({
  type,
  task,
  setEditFlag,
}: IAddFormProps) {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState(task.text);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      if (type === "add") {
        const newTask = {
          id: Math.random(),
          text: inputValue,
          isDone: false,
        };
        dispatch(addTask(newTask));
        setInputValue("");
      } else if (type === "edit") {
        const editedTask = {
          id: task.id,
          text: inputValue,
          isDone: task.isDone,
        };
        dispatch(editTask(editedTask));
        setInputValue(task.text);
        setEditFlag(false);
      }
    } else {
      alert("Please enter the task");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Your task here"
        />
        <button type="submit">{type === "add" ? "Add" : "Save"}</button>
      </form>
    </div>
  );
}