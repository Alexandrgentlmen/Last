import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { BtnMenu } from '~/ui/btn-menu';
import { routes } from '~/router';

export function Header() {
  return (
    <header className={styles.Header}>
      <BtnMenu handleClick={() => alert('Включить меню')} />
      <ul className={styles.nav}>
        <li className={styles.item}>
          <Link to={routes.LOGIN_PAGE}>Вход</Link>
        </li>
        <li className={styles.item}>Ваш профиль</li>
      </ul>
    </header>
  );
}
