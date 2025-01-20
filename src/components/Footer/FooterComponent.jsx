import styles from "./Footer.module.css";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        &copy; {currentYear} Rom Charit. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterComponent;
