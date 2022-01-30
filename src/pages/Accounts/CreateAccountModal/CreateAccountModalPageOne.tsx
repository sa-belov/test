import { IStepModalProps } from './createAccountModal.types';
import { modalTheme } from '../../../shared/Modal/ModalTheme';
import styles from './CreateAccountModalOne.module.sass';
import { FormControl, InputLabel, MenuItem, Select, TextField, ThemeProvider } from '@mui/material';
import React from 'react';

const CreateAccountModalPageOne = (props: IStepModalProps) => {
  return (
    <ThemeProvider theme={modalTheme}>
      <h1>Новый аккаунт</h1>
      <h2>Этап 1. Аккаунт</h2>
      <div className={styles.inputs}>
        <TextField onChange={props.onChange} value={props.state.login} name="login" label="Логин" size="small" />
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Выберите из списка</InputLabel>
          <Select
            onChange={props.onChange}
            value={props.state.role}
            name="role"
            label="Выберите из списка"
            autoWidth
            size="small"
          >
            <MenuItem value={'Doctor'}>Врач</MenuItem>
            <MenuItem value={'Admin'}>Администратор</MenuItem>
          </Select>
        </FormControl>
      </div>
    </ThemeProvider>
  );
};

export default CreateAccountModalPageOne;
