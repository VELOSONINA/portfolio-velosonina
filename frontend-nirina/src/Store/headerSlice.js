import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleHeader: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleHeader } = headerSlice.actions;

export default headerSlice.reducer;
