import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Credentials.module.scss";

export const Credentials = () => {
  return (
    <div className={styles.credentials}>
      <article>
        <h2>Credentials & Certifications</h2>
        <div className={styles.credentialWrapper}>
          <div className={`${styles.stripe} ${styles.primary}`}>
            <Link href="https://nwfa.org/">
              <Image
                draggable={false}
                height={298}
                width={2220}
                src="/images/spritesheet.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/">
              <Image
                draggable={false}
                height={298}
                width={2220}
                src="/images/spritesheet.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};
