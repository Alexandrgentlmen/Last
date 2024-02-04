import { useEffect } from 'react';
import styles from './List.module.scss';
import { getUUID } from '~/utils/getUUID';

const TODO_LIST = Array(6)
  .fill(null)
  .map(() => getUUID());

export function List() {
  useEffect(() => {}, []);

  return (
    <main className={styles.List}>
      <ul className={styles.todoList}>
        {TODO_LIST.map((id) => (
          <li key={id} className={styles.todoItem}></li>
        ))}
      </ul>
    </main>
  );
}
