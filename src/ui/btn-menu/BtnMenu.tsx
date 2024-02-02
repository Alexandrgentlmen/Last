import styles from './BtnMenu.module.scss';

interface IBtnMenu {
  handleClick: () => void;
}

export function BtnMenu({ handleClick }: IBtnMenu) {
  return (
    <button className={styles.BtnMenu} onClick={handleClick}>
      <svg
        id="svg"
        fill="#fff"
        stroke="#fff"
        width="50px"
        height="50px"
        version="1.1"
        viewBox="144 144 512 512"
      >
        <g strokeWidth="0"></g>
        <g strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC"></g>
        <g>
          <path d="m163.84 250.43h472.32v15.742h-472.32z"></path>
          <path d="m163.84 392.12h283.39v15.742h-283.39z"></path>
          <path d="m163.84 533.82h472.32v15.742h-472.32z"></path>
        </g>
      </svg>
    </button>
  );
}
