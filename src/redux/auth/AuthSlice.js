import { registerNewUser, logInUser, logOut, refreshCurrentUser } from './authOperations';

const { createSlice, isAnyOf } = require("@reduxjs/toolkit")

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

const handleFulfilled = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
}
const handleFulFilledLogOut = (state) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
}
const handleFulfilledRefreshCurrentUser = (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(refreshCurrentUser.fulfilled, handleFulfilledRefreshCurrentUser)
            .addCase(logOut.fulfilled, handleFulFilledLogOut)
            // .addCase(registerNewUser.fulfilled, handleFulfilled)
            // .addCase(logInUser.fulfilled, handleFulfilled)
            .addMatcher(isAnyOf(registerNewUser.fulfilled,
                logInUser.fulfilled), handleFulfilled)

    }
})

export const authReducer = authSlice.reducer;