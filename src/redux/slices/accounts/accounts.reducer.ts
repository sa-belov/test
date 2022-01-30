import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccount, IAccountState } from '../../../types/types';

const initialState: IAccountState = {
  accounts: [],
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    initAccounts(state, { payload }: PayloadAction<IAccount[]>) {
      state.accounts = payload;
    },
    addAccount(state, { payload }: PayloadAction<IAccount>) {
      console.log(payload);
      state.accounts.push(payload);
    },
    deleteAccount(state, { payload }: PayloadAction<number>) {
      const index = state.accounts.findIndex((acc) => acc.id === payload);
      if (index !== -1) state.accounts.splice(index, 1);
    },
  },
});

export const accountSliceActions = accountSlice.actions;
export default accountSlice.reducer;
