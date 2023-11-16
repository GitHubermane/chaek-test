import { ActionFn } from "types";
import { messageSetState } from "./actionCreators";
import { MessagesState } from "./types";
import { MessagesActionType } from "./actionsTypes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MessagesStateActionFn<F extends (...args: any) => any> = ActionFn<
  MessagesState,
  ReturnType<F>
>;

const setState: MessagesStateActionFn<typeof messageSetState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

export const messagesHandlers = {
  [MessagesActionType.SetState]: setState,
};
