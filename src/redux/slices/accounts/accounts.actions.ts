import { accountSliceActions } from './accounts.reducer';
import { CreateAccountDTO } from '../../../pages/Accounts/account.types';

export const initAccounts = () => async (dispatch) => {
  fetch('/api/accounts', { method: 'GET' })
    .then((r) => r.json())
    .then((r) => dispatch(accountSliceActions.initAccounts(r)));
};

export const createAccount = (account: CreateAccountDTO) => async (dispatch) => {
  fetch('/api/accounts', { method: 'POST', body: JSON.stringify(account) })
    .then((r) => r.json())
    .then((r) => dispatch(accountSliceActions.addAccount(r)));
};

export const deleteAccount = (id: number) => async (dispatch) => {
  fetch('/api/accounts/' + id, { method: 'DELETE' })
    .then((r) => r.json())
    .then((r) => dispatch(accountSliceActions.deleteAccount(r.id)));
};
