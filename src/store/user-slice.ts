import { getUser } from '@/services/user';
import { User } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type UserState = {
  user: User | null;
  isLoading: boolean;
};

const initialState = {
  user: null,
  isLoading: false,
} as UserState;

export const fetchUser = createAsyncThunk<User, void>(
  'users/fetchUser',
  async () => {
    const user = await getUser();

    return user;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action);
    });
  },
});

export default userSlice.reducer;
