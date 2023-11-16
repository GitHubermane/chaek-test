import { createReducer } from "@reduxjs/toolkit";
import { messagesHandlers } from "./handlers";
import { Message } from "./types";

const initialState = {
  messages: [] as Message[],
};

export default createReducer(initialState, messagesHandlers);
