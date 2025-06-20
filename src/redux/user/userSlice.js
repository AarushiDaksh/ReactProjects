import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    name: "Aru",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    modifyName: (state, action) => {
      state.currentUser.name = action.payload;
    },
  },
});

export const { modifyName } = userSlice.actions;
export default userSlice.reducer;
