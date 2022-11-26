import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.left}>
          <Image
            src="/logo-backgroundless.png"
            alt="logo"
            width={96}
            height={96}
          />
          <Image
            src="/images/certificates/nwfa-header.png"
            alt="nwfa certification"
            height={64}
            width={64}
          />
        </div>
        <p>© 2022 | Royal Richey Restoration - All rights reserved.</p>
        <div className={styles.right}>
          <Link href="https://www.facebook.com">
            <FaFacebook size={35} color="var(--light-grey)" />
          </Link>
          <Link href="https://www.linkedin.com">
            <FaLinkedin size={38} color="var(--light-grey)" />
          </Link>
          <Link href="https://www.youtube.com">
            <FaYoutube size={47} color="var(--light-grey)" />
          </Link>
        </div>
      </footer>
    </div>
  );
};
