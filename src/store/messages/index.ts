import { createSlice } from "@reduxjs/toolkit";
import { Message } from "./types";

const initialState = {
  messages: [] as Message[],
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
