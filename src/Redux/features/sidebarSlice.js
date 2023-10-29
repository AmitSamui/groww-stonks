import { sidebarMenuOptions } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarState: false,
  selectedSidebarMenu: sidebarMenuOptions.search,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.sidebarState = !state.sidebarState;
    },
    setSelectedMenu: (state, action) => {
      console.log(action.payload);
      state.selectedSidebarMenu = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar, setSelectedMenu } = sidebarSlice.actions;

export default sidebarSlice.reducer;