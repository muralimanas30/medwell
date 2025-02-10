import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
    winter: "winter",
    business: "business",
};

const getThemeFromLocalStorage = () => {
    const theme = localStorage.getItem("theme") || themes.winter;
    document.documentElement.setAttribute("data-theme", theme);
    return theme;
};

const getUserFromLocalStorage = () => JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
    user: getUserFromLocalStorage(),
    theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = { ...action.payload.user, token: action.payload.token };
            localStorage.setItem("user", JSON.stringify(state.user));
            toast.success("Successfully logged in");
            console.log(state.user);
        },
        updateUser:(state,action)=>{
            state.user = { ...state.user, ...action.payload };
            localStorage.setItem("user", JSON.stringify(state.user));
            toast.success("Successfully logged in");
        },
        logoutUser: (state) => {
            state.user = null;
            localStorage.removeItem("user");
            toast.success("Successfully logged out",{
                autoClose:1000
            });
            console.log("Logout successful");
        },
        toggleTheme: (state) => {
            state.theme = state.theme === themes.business ? themes.winter : themes.business;
            document.documentElement.setAttribute("data-theme", state.theme);
            localStorage.setItem("theme", state.theme);
        },
    },
});

export const { loginUser, logoutUser, toggleTheme,updateUser } = userSlice.actions;
export default userSlice.reducer;
