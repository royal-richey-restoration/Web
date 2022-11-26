import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import styles from "./Header.module.scss";

export const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowSize = () => {
        if (window.innerWidth > 1023) setMobile(false);
        else setMobile(true);
      };

      window.addEventListener("resize", handleWindowSize);

      handleWindowSize();

      return () => window.removeEventListener("resize", handleWindowSize);
    }
  }, []);

  if (mobile) {
    return (
      <nav className={styles.header}>
        <Image
          src="/logo-backgroundless.png"
          alt="logo"
          width={124}
          height={124}
        />
        <h1>
          Royal
          <br />
          Richey <br />
          Restoration
        </h1>
        <div
          className={`${styles.background} ${open ? "open" : ""}`.trim()}
          onClick={toggleOpen}
        />
        <div className={`${styles.mobile} ${open ? "open" : ""}`.trim()}>
          <div>
            <div className={styles.close} onClick={toggleOpen}>
              <GrClose fill="var(--yellow)" />
            </div>
            <Link href="/" onClick={toggleOpen}>
              Home
            </Link>
            <Link href="/about" onClick={toggleOpen}>
              About Us
            </Link>
            <Link href="/services" onClick={toggleOpen}>
              Services
            </Link>
            <div>
              <Link
                href="/services/existing-floor-removal"
                onClick={toggleOpen}
              >
                Floor Removal
              </Link>
              <Link
                href="/services/baseboard-trim-installation"
                onClick={toggleOpen}
              >
                Baseboard & Trim
              </Link>
              <Link
                href="/services/vinyl-plank-installation"
                onClick={toggleOpen}
              >
                Vinyl Plank
              </Link>
              <Link href="/services/buffing-recoating" onClick={toggleOpen}>
                Buffing & Recoating
              </Link>
              <Link href="/services/flooring-consultation" onClick={toggleOpen}>
                Consultation
              </Link>
              <Link
                href="/services/refinishing-sanding-staining"
                onClick={toggleOpen}
              >
                Refinishing, Sanding, & Staining
              </Link>
            </div>
            <Link href="/projects" onClick={toggleOpen}>
              Projects
            </Link>
            <Link href="/contact" onClick={toggleOpen}>
              Contact Us
            </Link>
          </div>
        </div>
        <div className={styles.bars} onClick={toggleOpen}>
          <FaBars />
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles.header}>
      <Image
        src="/logo-backgroundless.png"
        alt="logo"
        width={124}
        height={124}
      />
      <h1>
        Royal
        <br />
        Richey <br />
        Restoration
      </h1>
      <Image
        src="/images/certificates/nwfa-header.png"
        alt="nwfa certification"
        height={64}
        width={64}
      />
      <div className={styles.desktop}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <div className="dropdown">
          <Link href="/services">Services</Link>
          <div className="options">
            <Link href="/services/existing-floor-removal">
              Existing Floor Removal
            </Link>
            <Link href="/services/baseboard-trim-installation">
              Baseboard & Trim Installation
            </Link>
            <Link href="/services/vinyl-plank-installation">
              Luxury Vinyl Plank Installation
            </Link>
            <Link href="/services/buffing-recoating">
              Wood Floor Buffing & Recoating
            </Link>
            <Link href="/services/flooring-consultation">
              Custom Flooring Consultation Available
            </Link>
            <Link href="/services/refinishing-sanding-staining">
              Wood Floor Refinishing, Sanding, & Staining
            </Link>
          </div>
        </div>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};
