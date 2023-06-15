import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { addTask, editTask } from "../../../redux/tasks.slice";
import { ITask } from "../../../redux/types";
import Modal from "../Modal/Modal";
import "./AddTaskForm.css";

type AddFormProps = {
  type: string;
  task: ITask;
  setEditFlag?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

export default function AddTaskForm({ type, task, setEditFlag }: AddFormProps) {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState(task.text);
  const [showModal, setShowModal] = useState(false);

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
        if (setEditFlag) {
          setEditFlag(false);
        }
      }
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="addTaskFormDiv">
      {showModal && (
        <Modal message="Please enter the task" onClose={closeModal} />
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Your task here"
          className={type === "add" ? "addTaskInput" : "editTaskInput"}
        />
        <button type="submit" className="addTaskBtn">
          ✅
        </button>
      </form>
    </div>
  );
}
