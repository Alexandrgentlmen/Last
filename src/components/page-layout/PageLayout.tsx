import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Footer } from '../footer';
import { Navigation } from '../navigation';
import { Container } from '../container';
import styles from './PageLayout.module.scss';

export function PageLayout() {
  return (
    <div className={styles.PageLayout}>
      <Header />
      <Container types="spacebetween">
        <Navigation isOpen={true} navigation={'Меню'} />
        <Outlet />
      </Container>
      <Footer footer={'О компании'} />
    </div>
  );
}
