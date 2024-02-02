import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import { Navigation } from '../navigation';
import styles from './PageLayout.module.scss';

export function PageLayout() {
  return (
    <div className={styles.PageLayout}>
      <Header />
      <Navigation navigation={'Меню'} />
      <Outlet />
      <Footer footer={'О компании'} />
    </div>
  );
}
