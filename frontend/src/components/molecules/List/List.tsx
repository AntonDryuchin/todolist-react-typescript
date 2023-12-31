import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../../redux/hooks";
import { ITask, RootState } from "../../../redux/types";
import Task from "../../atoms/Task/Task";
import "./List.css";

export default function List() {
  const tasks = useAppSelector((state: RootState) => state.tasksSlice.tasks);

  return (
    <div className="list">
      {tasks.map((task: ITask) => (
        <Task {...task} key={task.id} />
      ))}
    </div>
  );
}
