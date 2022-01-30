import Modal from '../../../shared/Modal/Modal';
import React, { useState } from 'react';
import { CreateAccountDTO } from '../account.types';
import CreateAccountModalPageOne from './CreateAccountModalPageOne';
import CreateAccountModalPageTwo from './CreateAccountModalPageTwo';
import CreateAccountModalPageThree from './CreateAccountModalPageThree';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import styles from './CreateAccountModalOne.module.sass';
import { createAccount } from '../../../redux/slices/accounts/accounts.actions';

interface IProps {
  onClose: () => void;
}
const CreateAccountModal = (props: IProps) => {
  const dispatch = useDispatch();
  const [state, setState] = useState<CreateAccountDTO>({
    login: '',
    name: '',
    surname: '',
    password: '',
    repeatPassword: '',
    role: '',
    specializations: [],
    specialization: '',
  });
  const [step, setStep] = useState(0);

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    dispatch(createAccount(state));
    props.onClose();
  };

  const renderFooter = () => {
    const renderPrevButton = () => (
      <Button variant="contained" color="secondary" onClick={() => setStep(step - 1)}>
        Назад
      </Button>
    );

    const renderNextButton = () => (
      <Button
        variant="contained"
        color="success"
        onClick={() => setStep(step + 1)}
        disabled={
          (step === 1 &&
            (state.password !== state.repeatPassword || !state.password || !state.name || !state.surname)) ||
          (step === 0 && (!state.login || !state.role))
        }
      >
        Далее
      </Button>
    );

    const renderCancelButton = () => (
      <Button variant="contained" color="secondary" onClick={props.onClose}>
        Отменить
      </Button>
    );

    const renderSubmitButton = () => (
      <Button variant="contained" color="success" onClick={handleSubmit}>
        Создать
      </Button>
    );

    return (
      <div className={styles.buttons}>
        {step === 0 && renderCancelButton()}
        {step > 0 && renderPrevButton()}
        {step < 2 && renderNextButton()}
        {step === 2 && renderSubmitButton()}
      </div>
    );
  };

  const formProps = { state, setState, onChange: handleChange };
  return (
    <Modal onClose={props.onClose}>
      {step === 0 && <CreateAccountModalPageOne {...formProps} />}
      {step === 1 && <CreateAccountModalPageTwo {...formProps} />}
      {step === 2 && <CreateAccountModalPageThree {...formProps} />}
      {renderFooter()}
    </Modal>
  );
};

export default CreateAccountModal;
