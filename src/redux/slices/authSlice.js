import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {user: JSON.parse(localStorage.getItem("user"))},
    reducers: {
        setUser: (state, action) => {
            console.log(action)
            let user = action.payload
            state.user = user
            console.log(state.user)
        },
        removeUser: (state, action) => {
            console.log(state.user)
            state.user = null
            console.log(state.user)
        }
    }
})

export const {setUser, removeUser} = authSlice.actions

export default authSlice.reducer