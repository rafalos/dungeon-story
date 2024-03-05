import { getUser } from '@/services/user';
import { AppThunk, Modifier, Operation, User } from '@/types';
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
    restoreEnergy(state) {
      if (state.user) {
        state.user.energy = 3;
      }
    },
    deductEnergy(state) {
      if (state.user) {
        state.user.energy -= 1;
      }
    },
    setExperience(state, action: PayloadAction<number>) {
      if (state.user) {
        state.user.experience = action.payload;
      }
    },
    increaseExperience(state, action: PayloadAction<number>) {
      if (state.user) {
        state.user.experience += action.payload;
      }
    },
    increaseLevel(state) {
      if (state.user) {
        state.user.level++;
      }
    },
    increaseDamage(
      state,
      {
        payload,
      }: PayloadAction<{
        operation: Operation;
        value: number;
      }>
    ) {
      if (state.user) {
        state.user.damage +=
          payload.operation === 'INC' ? payload.value : -payload.value;
      }
    },
    increaseArmor(
      state,
      {
        payload,
      }: PayloadAction<{
        operation: Operation;
        value: number;
      }>
    ) {
      if (state.user) {
        state.user.armor +=
          payload.operation === 'INC' ? payload.value : -payload.value;
      }
    },
    increaseAttributes(
      state,
      {
        payload,
      }: PayloadAction<{
        operation: Operation;
        modifiers: Modifier[];
      }>
    ) {
      if (state.user) {
        payload.modifiers.forEach((modifier) => {
          const [attribute, value] = modifier;

          state.user!.attributes[attribute] +=
            payload.operation === 'INC' ? value : -value;
        });
      }
    },
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

    builder.addCase(fetchUser.pending, (state) => {
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

  return { user, isLoading };
};

export default userSlice.reducer;
export const {
  increaseExperience,
  increaseLevel,
  deductGold,
  addGold,
  increaseArmor,
  increaseDamage,
  increaseAttributes,
  setExperience,
  deductEnergy,
  restoreEnergy,
} = userSlice.actions;

export const useUserStatistics = () => {
  const { user } = useAppSelector((state) => state.user);
  if (!user) throw new Error('There was an error getting user data');

  const { armor, attributes, criticalChance, damage } = user;
  return { armor, attributes, criticalChance, damage };
};

export const gainExperience = (amount: number): AppThunk => {
  return (dispatch, getState) => {
    const currentExperience = getState().user.user?.experience;
    const maxExperience = getState().user.user?.maxExperience;

    if (!currentExperience || !maxExperience) return;

    if (currentExperience + amount >= maxExperience) {
      dispatch(increaseLevel());
      const diff = currentExperience + amount - maxExperience;
      amount = 0 + diff;
      dispatch(setExperience(amount));
    } else {
      dispatch(increaseExperience(amount));
    }
  };
};
