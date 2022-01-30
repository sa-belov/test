import { IAccount } from '../../../../types/types';
import { IconButton } from '@mui/material';
import { ReactComponent as DeleteIcon } from '../../../../images/delete.svg';
import { useDispatch } from 'react-redux';
import { accountSliceActions } from '../../../../redux/slices/accounts/accounts.reducer';
import { FC } from 'react';
import styles from './TableItem.module.sass';

type IProps = {
  acc: IAccount;
};

const TableItem: FC<IProps> = ({ acc }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(accountSliceActions.deleteAccount(acc.id));
  };

  const renderSpecializations = () => {
    if (acc.specializations.length === 0) return <div className={styles.tbodyItemSpec}>Нет спецмализации</div>;

    return acc.specializations.map((spec) => (
      <div key={spec.id} className={styles.tbodyItemSpec}>
        {spec.specialization}
      </div>
    ));
  };

  return (
    <tr className={styles.tbody}>
      <td className={styles.tbodyItem}>
        {acc.name} {acc.surname}
      </td>
      <td className={styles.tbodyItem}>{acc.login}</td>
      <td className={styles.tbodyItem}>{acc.role}</td>
      <td className={styles.tbodyItemSpecialization}>{renderSpecializations()}</td>
      <td className={styles.tbodyItemDelete}>
        <IconButton onClick={handleDelete} aria-label="delete" size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </td>
    </tr>
  );
};

export default TableItem;
