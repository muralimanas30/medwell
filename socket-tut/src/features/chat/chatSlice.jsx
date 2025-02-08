import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
    diagnosisChat: [],
    dietChat: [],
    fitnessChat: []
};

const url = 'https://medwell-backend.onrender.com/chat/';


export const sendMessage = createAsyncThunk(
    'chat/sendMessage',
    async (userSide, thunkAPI) => {
        console.log(userSide);
        let chatType;
        let userMessage = userSide.message
        chatType = userSide.type
        let urlPart;
        if(chatType=='diagnosisChat') urlPart='diagnose'
        else if(chatType=='dietChat') urlPart='diet'
        if(chatType=='fitnessChat') urlPart='fitness'
        try {
            const state = thunkAPI.getState(); 
            const token = state?.userState?.user?.token;

            const response = await axios.post(
                `${url}${urlPart}`,
                { message: userMessage },
                { headers: { 'Authorization': `Bearer ${token}` } }
            );

            const reply = response.data?.reply;

            const userRow = { role: "user", msg: userMessage };
            const botRow = { role: "bot", msg: reply }; 


            thunkAPI.dispatch(appendChat({ type: chatType, message: userRow }));
            thunkAPI.dispatch(appendChat({ type: chatType, message: botRow }));

            toast.success("Message sent successfully!");

        } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Failed to send message.");
            return thunkAPI.rejectWithValue(error.response?.data || "Error");
        }
    }
);

export const getAllChats = createAsyncThunk(
    'chat/getAllChats',
    async (_, thunkAPI) => {
        try {
            const state = thunkAPI.getState();
            const token = state?.userState?.user?.token;
            // console.log(state);
            const response = await axios.get(`${url}getAllChats`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            thunkAPI.dispatch(setAllChats(response.data));

            toast.success("All chats retrieved!", { autoClose: 1000 });

        } catch (error) {
            console.error("Error fetching chats:", error);
            toast.error("Failed to retrieve chats.");
            return thunkAPI.rejectWithValue(error.response?.data || "Error");
        }
    }
);


const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setAllChats: (state, action) => {
            return { ...state, ...action.payload };
        },
        setChat: (state, action) => {
            const { type, chat } = action.payload;
            state[type] = chat;
        },
        appendChat: (state, action) => {
            const { type, message } = action.payload;
            state[type].push(message);
        },
        clearChat: (state, action) => {
            const { type } = action.payload;
            state[type] = [];
        },
        clearAllChats: () => initialState,
    }
});


export const { setAllChats, setChat, appendChat, clearChat, clearAllChats } = chatSlice.actions;


export default chatSlice.reducer;
