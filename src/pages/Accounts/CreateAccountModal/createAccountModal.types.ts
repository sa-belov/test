import { CreateAccountDTO } from '../account.types';

export interface IStepModalProps {
  state: CreateAccountDTO;
  setState: (updates: CreateAccountDTO) => void;
  onChange: (e) => void;
}
