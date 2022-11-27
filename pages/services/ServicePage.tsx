import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import styles from "./ServicePage.module.scss";
import { SERVICES } from ".";

interface ServicePageProps extends React.PropsWithChildren {
  pageHref: string;
  photo: string;
  title: React.ReactNode;
}

export const ServicePage = ({
  children,
  pageHref,
  photo,
  title,
}: ServicePageProps) => {
  return (
    <div className={styles.servicePage}>
      <div className={styles.banner}>
        <Image
          src="/images/heading-banner.jpg"
          alt=""
          priority
          width={1920}
          height={575}
        />
        <h1>{title}</h1>
      </div>
      <article>
        <nav className={styles.left}>
          <p>Services</p>
          {SERVICES.filter((service) => service.href !== pageHref).map(
            (service) => (
              <Link key={service.href} href={service.href}>
                {service.title}
              </Link>
            )
          )}
          <div>
            <h3>Ready to Start a New Project?</h3>
            <p>
              Contact Us now to get a free consultation at your home or business
              location.
            </p>
            <Link href="/contact">
              More info <FaArrowRight color="#FFFFFF" size={18} />
            </Link>
          </div>
        </nav>
        <div className={styles.right}>
          <Image alt="" src={photo} width={1200} height={800} />
          <div className={styles.childrenWrapper}>
            <h3>{title}</h3>
            {children}
          </div>
          <div className={styles.rightBottom}>
            <Image
              alt=""
              src="/images/services/shop.jpg"
              height={420}
              width={420}
            />
            <p>
              Allow us to transform any wood floor or area in your existing home
              into your dream space. We have over 20 years experience with
              highly custom and detailed flooring installations as well as
              refurbishing and restoring old, weathered, existing wood floors.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
