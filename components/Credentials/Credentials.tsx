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
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={176}
                width={216}
                src="/images/certificates/nwfa-member.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={174}
                width={216}
                src="/images/certificates/nwfa-certified.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={240}
                width={216}
                src="/images/certificates/nwfa-sanding.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={240}
                width={216}
                src="/images/certificates/nwfa-finish.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={240}
                width={216}
                src="/images/certificates/nwfa-recoating.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={240}
                width={216}
                src="/images/certificates/nwfa-colorants.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={176}
                width={216}
                src="/images/certificates/nwfa.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={176}
                width={216}
                src="/images/certificates/nwfa-member.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={174}
                width={216}
                src="/images/certificates/nwfa-certified.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={240}
                width={216}
                src="/images/certificates/nwfa-sanding.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={240}
                width={216}
                src="/images/certificates/nwfa-finish.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={240}
                width={216}
                src="/images/certificates/nwfa-recoating.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={240}
                width={216}
                src="/images/certificates/nwfa-colorants.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={176}
                width={216}
                src="/images/certificates/nwfa.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={176}
                width={216}
                src="/images/certificates/nwfa-member.png"
                alt=""
              />
            </Link>
            <Link href="https://nwfa.org/" className={styles.credential}>
              <Image
                draggable={false}
                height={174}
                width={216}
                src="/images/certificates/nwfa-certified.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};
