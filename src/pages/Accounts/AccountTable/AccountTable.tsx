import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import TableItem from './TableItem/TableItem';
import styles from './AccountTable.module.sass';

const AccountTable = () => {
  const accounts = useSelector((state: RootState) => state.account.accounts);

  const renderAccounts = () => {
    return accounts.map((acc) => <TableItem key={acc.id} acc={acc} />);
  };

  return (
    <div className={styles.table}>
      <table className={styles.tableContent}>
        <thead>
          <tr>
            <td className={styles.theadItem}>Фамилия Имя</td>
            <td className={styles.theadItem}>Логин</td>
            <td className={styles.theadItem}>Роль</td>
            <td className={styles.theadItem}>Специализация</td>
          </tr>
        </thead>
        <tbody>{renderAccounts()}</tbody>
      </table>
    </div>
  );
};

export default AccountTable;
