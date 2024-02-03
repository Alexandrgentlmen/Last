import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Navigation.module.scss';
import { routes } from '~/router';

interface INavigation {
  navigation: string;
  isOpen: boolean;
}

export function Navigation({ navigation, isOpen }: INavigation) {
  return (
    <div
      className={classNames(
        isOpen ? styles.Navigation_open : styles.Navigation,
      )}
    >
      <h3 className={styles.title}>{navigation}</h3>
      <nav className={styles.nav}>
        <Link to={routes.ROOT}>Главная</Link>
        <Link to={routes.TODO_LIST}>Твои задачи</Link>
        <Link to={routes.PROFILE}>Личный кабинет</Link>
      </nav>
    </div>
  );
}
