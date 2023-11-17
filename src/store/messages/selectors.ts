import { RootState } from "store";

export const getLastMessage = (state: RootState) => {
  const { messages } = state.messages;
  const lastIndex = messages.length - 1;

  return messages[lastIndex];
};
