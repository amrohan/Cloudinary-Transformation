import styles from "./Footer.module.scss";

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <p>
        &copy; <a href="https://amrohan.com">amrohan</a>,
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
