import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITask, IState } from "./types";

const initialState: IState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      return (state = { ...state, tasks: [...state.tasks, action.payload] });
    },
    delTask: (state, action: PayloadAction<ITask>) => {
      return (state = {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      });
    },
    editTask: (state, action: PayloadAction<ITask>) => {
      return (state = {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      });
    },
  },
});

export const { addTask, delTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
