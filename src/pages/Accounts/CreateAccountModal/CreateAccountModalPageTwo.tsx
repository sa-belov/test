import { IStepModalProps } from './createAccountModal.types';
import { modalTheme } from '../../../shared/Modal/ModalTheme';
import styles from './CreateAccountModalOne.module.sass';
import { TextField, ThemeProvider } from '@mui/material';
import React from 'react';

const CreateAccountModalPageTwo = (props: IStepModalProps) => {
  return (
    <ThemeProvider theme={modalTheme}>
      <h1>Новый аккаунт</h1>
      <h2>Этап 2. Личная информация</h2>
      <div className={styles.inputs}>
        <TextField onChange={props.onChange} value={props.state.surname} name="surname" label="Фамилия" size="small" />
        <TextField onChange={props.onChange} value={props.state.name} name="name" label="Имя" size="small" />
        <TextField
          onChange={props.onChange}
          value={props.state.password}
          name="password"
          label="Пароль"
          size="small"
          type="password"
        />
        <TextField
          onChange={props.onChange}
          value={props.state.repeatPassword}
          name="repeatPassword"
          label="Повторите пароль"
          size="small"
          type="password"
        />
      </div>
    </ThemeProvider>
  );
};

export default CreateAccountModalPageTwo;
