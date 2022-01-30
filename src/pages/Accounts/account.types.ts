import { ISpecialization } from '../../types/types';

export interface CreateAccountDTO {
  login: string;
  role: string;
  name: string;
  surname: string;
  password: string;
  repeatPassword: string;
  specializations: ISpecialization[];
  specialization: string;
}
