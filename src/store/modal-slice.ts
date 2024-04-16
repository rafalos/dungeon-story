import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type ModalState = {
  isOpen: boolean;
  title: string;
  content: string;
};

const initialState = {
  isOpen: true,
  title: '',
  content: '',
} as ModalState;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    close(state) {
      state.isOpen = false;
    },
    display(
      state,
      action: PayloadAction<{
        title: string;
        content: string;
      }>
    ) {
      state.isOpen = true;
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
  },
});

export default modalSlice.reducer;
export const { close, display } = modalSlice.actions;
