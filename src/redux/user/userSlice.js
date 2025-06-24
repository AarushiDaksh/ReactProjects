import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccessful: (state, action) => {
      state.currentUser = action.payload;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload; 
    },
  },
});

export const { loginSuccessful, updateUserSuccess } = userSlice.actions;
export default userSlice.reducer;
