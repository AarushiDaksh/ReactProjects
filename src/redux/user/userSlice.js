// redux/user/userSlice.js
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
  },
});

export const { loginSuccessful } = userSlice.actions;
export default userSlice.reducer;
