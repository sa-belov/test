import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './slices/accounts/accounts.reducer';

export default configureStore({
  reducer: {
    account: accountReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});
