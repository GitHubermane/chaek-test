import { MessagesActionType } from "./actionsTypes";
import { MessagesState } from "./types";

export const messageSetState = (payload: Partial<MessagesState>) => ({
  type: MessagesActionType.SetState,
  payload,
});
