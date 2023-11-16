import { Action as ActionRedux } from "redux";

export type ActionFn<T, U> = (
  state: Readonly<T>,
  action: ActionRedux<string> & U,
) => Readonly<T>;
