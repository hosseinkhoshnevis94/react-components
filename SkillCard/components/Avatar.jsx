import styles from './index.module.css'

export default function Avatar({imgSrc,imgAlt}) {
    return <img className={styles.avatar} src='./avatar.jpg' alt={imgAlt} />;
  }