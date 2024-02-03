import classNames from 'classnames';
import styles from './Container.module.scss';

interface ITypes {
  children?: React.ReactNode;
  types: 'spacearound' | 'spacebetween' | 'flexstart' | 'flexend' | '';
}

export function Container({ children, types }: ITypes) {
  return (
    <div className={classNames(styles.Container, styles[types])}>
      {children}
    </div>
  );
}
