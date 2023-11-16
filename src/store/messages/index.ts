import { createReducer } from "@reduxjs/toolkit";
import { messagesHandlers } from "./handlers";
import { Message } from "./types";

const initialState = {
  messages: [] as Message[],
};

export const messageSlice = createReducer(initialState, messagesHandlers);
