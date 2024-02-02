import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.scss';
import { ROUTES } from '~/router';

export function PageNotFound() {
  return (
    <div className={styles.PageNotFound}>
      <h1>Page Not Found</h1>
      <Link className={styles.link} to={ROUTES.ROOT}>
        Вернуться на главную
      </Link>
    </div>
  );
}
