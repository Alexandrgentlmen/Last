import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { ROUTES } from '~/router';

interface INavigation {
  navigation: string;
}

export function Navigation({ navigation }: INavigation) {
  return (
    <div className={styles.Navigation}>
      <h3 className={styles.title}>{navigation}</h3>
      <nav className={styles.nav}>
        <Link to={ROUTES.ROOT}>Главная</Link>
        <Link to={ROUTES.TODO_LIST}>Твои задачи</Link>
        <Link to={ROUTES.PROFILE}>Личный кабинет</Link>
      </nav>
    </div>
  );
}
