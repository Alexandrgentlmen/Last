import styles from './Header.module.scss';
import { BtnMenu } from '~/ui/btn-menu';

export function Header() {
  return (
    <header className={styles.Header}>
      <BtnMenu handleClick={() => alert('Включить меню')} />
      <ul className={styles.nav}>
        <li>Язык</li>
        <li>Настройки</li>
        <li>Тема</li>
      </ul>
    </header>
  );
}
