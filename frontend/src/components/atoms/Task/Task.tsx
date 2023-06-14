import React, { useState } from "react";
import { ITask } from "../../../redux/types";
import { useAppDispatch } from "../../../redux/hooks";
import { delTask, editTask } from "../../../redux/tasks.slice";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import "./Task.css";

export default function Task({ id, text, isDone }: ITask) {
  const dispatch = useAppDispatch();
  const [editFlag, setEditFlag] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const checkHandler = () => {
    const checkedTask = {
      id,
      text,
      isDone: !isDone,
    };
    dispatch(editTask(checkedTask));
  };

  const delHandler = () => {
    dispatch(delTask({ id, text, isDone }));
  };

  return (
    <div className="task">
      {editFlag ? (
        <>
          <input
            className="taskCheckbox"
            type="checkbox"
            checked={isDone}
            disabled
          />
          <AddTaskForm
            type="edit"
            task={{ id, text, isDone }}
            setEditFlag={setEditFlag}
          />
          <button onClick={() => setEditFlag(false)}>cancel</button>
        </>
      ) : (
        <>
          <div>
            <input
              type="checkbox"
              className="taskCheckbox"
              checked={isDone}
              onChange={() => checkHandler()}
            />
            <span
              style={{
                textDecoration: isDone ? "line-through" : "",
                color: isDone ? "grey" : "black",
              }}
            >
              {text}
            </span>
          </div>
          <div>
            <button onClick={() => setEditFlag(true)}>edit</button>
            <button onClick={delHandler}>del</button>
          </div>
        </>
      )}
    </div>
  );
}
