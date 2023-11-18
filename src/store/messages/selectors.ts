import { RootState } from "store";

export const getLastMessage = (state: RootState) => {
  const { messages } = state.messages;
  const lastIndex = messages.length - 1;

  return messages[lastIndex];
};

export const getIsMyTurn = (state: RootState) => {
  const lastMessage = getLastMessage(state);

  return !lastMessage.isMine;
};

export const getLastLetter = (state: RootState) => {
  const lastMessage = getLastMessage(state);
  const lastMessageText = lastMessage.text;

  let lastLetter = lastMessageText[lastMessageText.length - 1];

  if (lastLetter === "ь" || lastLetter === "ъ") {
    lastLetter = lastMessageText[lastMessageText.length - 2];
  }

  return lastLetter;
};
