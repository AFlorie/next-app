import styles from "./footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.text}>
        {` Logo Creative Thoughts Agency @${currentYear} All rights reserved`}
      </div>
    </div>
  );
};

export default Footer;
