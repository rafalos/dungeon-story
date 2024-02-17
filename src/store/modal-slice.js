import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: true,
    title: '',
    description: '',
  },
  reducers: {
    closeModal(state) {
      state.isOpen = false;
    },
    openModal(state, action) {
      state.isOpen = true;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
  },
});

export default modalSlice.reducer;
export const modalActions = modalSlice.actions;
