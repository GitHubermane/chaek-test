export type Message = {
  id: number;
  isMine: boolean;
  text: string;
};

export type MessagesState = {
  messages: Message[];
};
