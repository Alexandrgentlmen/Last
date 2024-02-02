import styles from './Footer.module.scss';

interface IFooter {
  footer: string;
}

export function Footer({ footer }: IFooter) {
  return <div className={styles.Footer}>{footer}</div>;
}
