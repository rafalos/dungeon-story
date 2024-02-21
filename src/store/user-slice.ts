import { getUser } from '@/services/user';
import { User } from '@/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useAppSelector } from '.';

type UserState = {
  user: User | null;
  isLoading: boolean;
};

const initialState = {
  user: null,
  isLoading: true,
} as UserState;

export const fetchUser = createAsyncThunk<User, void>(
  'users/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const user = await getUser();

      return user;
    } catch (error) {
      return rejectWithValue('There was an error fetching user');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    deductGold(state, action: PayloadAction<number>) {
      if (state.user) {
        state.user.gold -= action.payload;
      }
    },
    addGold(state, action: PayloadAction<number>) {
      if (state.user) {
        state.user.gold += action.payload;
      }
    },
  },
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

export const useUserData = () => {
  const { user, isLoading } = useAppSelector((state) => state.user);

  if (!user && !isLoading) {
    throw new Error('There was a problem fetching user data');
  }
  return user;
};

export default userSlice.reducer;
export const { deductGold, addGold } = userSlice.actions;
