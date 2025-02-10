import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice'
import chatReducer from "./features/chat/chatSlice"; 
export const store = configureStore({
    reducer: {
        userState: userReducer,
        chat:chatReducer,
        }
})