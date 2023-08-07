import { registerNewUser, logInUser, logOut, refreshCurrentUser } from './authOperations';

const { createSlice, isAnyOf } = require("@reduxjs/toolkit");

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
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
    state.isRefreshing = false;
}
const handlePendingRefreshCurrentUser = (state) => {
    state.isRefreshing = true;
}
const handleRejectedRefreshCurrentUser = (state) => {
    state.isRefreshing = false;
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(refreshCurrentUser.fulfilled, handleFulfilledRefreshCurrentUser)
            .addCase(refreshCurrentUser.pending, handlePendingRefreshCurrentUser)
            .addCase(refreshCurrentUser.rejected, handleRejectedRefreshCurrentUser)
            .addCase(logOut.fulfilled, handleFulFilledLogOut)
            .addMatcher(isAnyOf(registerNewUser.fulfilled,
                logInUser.fulfilled), handleFulfilled)

    }
})

export const authReducer = authSlice.reducer;