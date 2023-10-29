import { sidebarMenuOptions } from "@/constants";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productInformation: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductInformation: (state, action) => {
      state.productInformation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProductInformation } = productSlice.actions;

export default productSlice.reducer;
