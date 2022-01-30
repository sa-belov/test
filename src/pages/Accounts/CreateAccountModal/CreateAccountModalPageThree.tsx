import { IStepModalProps } from './createAccountModal.types';
import { modalTheme } from '../../../shared/Modal/ModalTheme';
import styles from './CreateAccountModalThree.module.sass';
import { TextField, ThemeProvider } from '@mui/material';
import React from 'react';
import Specialization from '../../../components/Specialization/Specialization';
import { ISpecialization } from '../../../types/types';

const CreateAccountModalPageThree = (props: IStepModalProps) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      props.setState({
        ...props.state,
        specializations: props.state.specializations.concat({
          id: Date.now(),
          specialization: props.state.specialization,
        }),
        specialization: '',
      });
    }
  };

  const handleSpecializationRemove = (id: ISpecialization['id']) => {
    props.setState({ ...props.state, specializations: props.state.specializations.filter((s) => s.id !== id) });
  };

  const renderSpecializations = () => {
    return props.state.specializations.map((spec) => (
      <Specialization key={spec.id} spec={spec} onRemove={handleSpecializationRemove} />
    ));
  };

  return (
    <ThemeProvider theme={modalTheme}>
      <h1>Новый аккаунт</h1>
      <h2>Этап 3. Специализация врача</h2>
      <div className={styles.inputs}>
        <TextField
          onKeyDown={handleKeyDown}
          onChange={props.onChange}
          value={props.state.specialization}
          name="specialization"
          label="Специализация"
          size="small"
        />
      </div>
      <div className={styles.specializations}>{renderSpecializations()}</div>
    </ThemeProvider>
  );
};

export default CreateAccountModalPageThree;
