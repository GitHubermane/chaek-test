import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export const store = configureStore({ reducer: combineReducers(rootReducer) });
