import { ThunkAction } from "redux-thunk";
import store from "./store";
import { AnyAction } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export type ITask = {
  id: number;
  text: string;
  isDone: boolean;
};

export type IState = {
  tasks: ITask[];
};
