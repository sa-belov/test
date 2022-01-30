import styles from './Account.module.sass';
import Button from '@mui/material/Button';
import { ReactComponent as PlusIcon } from '../../images/plus.svg';
import { createTheme, TextField, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AccountTable from './AccountTable/AccountTable';
import CreateAccountModal from './CreateAccountModal';
import { useDispatch } from 'react-redux';
import { initAccounts } from '../../redux/slices/accounts/accounts.actions';

const theme = createTheme({
  palette: {
    success: {
      main: '#3FC173',
    },
  },
});

const Accounts = () => {
  const dispatch = useDispatch();
  const [createModalOpen, setCreateModalOpen] = useState(false);

  useEffect(() => {
    dispatch(initAccounts());
  }, []);

  const renderSubHeader = () => {
    return (
      <ThemeProvider theme={theme}>
        <div className={styles.subHeader}>
          <TextField
            id="outlined-basic"
            label="Введите ФИО, логин, роль или специализацию"
            variant="outlined"
            size="small"
            type="text"
          />
          <Button onClick={() => setCreateModalOpen(true)} variant="contained" color="success" endIcon={<PlusIcon />}>
            Новый аккаунт
          </Button>
          {createModalOpen && <CreateAccountModal onClose={() => setCreateModalOpen(false)} />}
        </div>
        <AccountTable />
      </ThemeProvider>
    );
  };

  return <div className={styles.content}>{renderSubHeader()}</div>;
};

export default Accounts;
