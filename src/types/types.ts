export interface ISpecialization {
  specialization: string;
  id: number;
}

export interface IAccount {
  login: string;
  role: string;
  name: string;
  surname: string;
  specializations: ISpecialization[];
  id: number;
  password: string;
}

export interface IAccountState {
  accounts: IAccount[];
}

export interface RootState {
  account: IAccountState;
  modal: IModalState;
}

export interface IModalState {
  isOpen: boolean;
  [key: string]: boolean;
}
