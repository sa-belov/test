import styles from '../../pages/Accounts/CreateAccountModal/CreateAccountModalThree.module.sass';
import { ReactComponent as XIcon } from '../../images/x.svg';
import React, { FC } from 'react';
import { ISpecialization } from '../../types/types';

type IProps = {
  spec: ISpecialization;
  onRemove: (id: ISpecialization['id']) => void;
};

const Specialization: FC<IProps> = ({ spec, onRemove }) => {
  return (
    <div className={styles.spec}>
      <span className={styles.specItem}>{spec.specialization}</span>
      <XIcon onClick={() => onRemove(spec.id)} />
    </div>
  );
};

export default Specialization;
