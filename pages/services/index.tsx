import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";

import { Credentials, Testimonials } from "../../components";

import styles from "./Services.module.scss";

export const SERVICES: ServiceProps[] = [
  {
    title: "Existing Floor Removal",
    photo: "/images/services/remove-thumbnail.jpg",
    href: "/services/existing-floor-removal",
  },
  {
    title: "Baseboard & Trim Installation",
    photo: "/images/services/trim-thumbnail.jpg",
    href: "/services/baseboard-trim-installation",
  },
  {
    title: "Luxury Vinyl Plank Installation",
    photo: "/images/services/linyl-thumbnail.jpg",
    href: "/services/vinyl-plank-installation",
  },
  {
    title: "Wood Floor Buffing & Recoating",
    photo: "/images/services/buffing-thumbnail.jpg",
    href: "/services/buffing-recoating",
  },
  {
    title: "Custom Flooring Consultation Available",
    photo: "/images/services/custom-thumbnail.jpg",
    href: "/services/flooring-consultation",
  },
  {
    title: "Wood Floor Refinishing, Sanding, & Staining",
    photo: "/images/services/sanding-thumbnail.jpg",
    href: "/services/refinishing-sanding-staining",
  },
];

export default function Services({}) {
  const [sent, setSent] = React.useState(false);
  const nameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const messageRef = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    if (nameRef.current && emailRef.current && messageRef.current) {
      event.preventDefault();
      const request = await fetch("/api/contact", {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current?.value,
          email: emailRef.current?.value,
          message: messageRef.current?.value,
        }),
      });
      if (request.ok) {
        setSent(true);
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Services | Royal Richey Restoration</title>
      </Head>
      <div className={styles.banner}>
        <Image
          src="/images/heading-banner.jpg"
          alt=""
          priority
          width={1920}
          height={575}
        />
        <h1>Services</h1>
      </div>
      <article className={styles.services}>
        <h2>About our Services</h2>
        <div className={styles.textContainer}>
          <div>
            <p>
              Protect your investment by hiring Royal Wood Floors to provide a
              cost effective solution to your flooring issues.
            </p>
            <p>
              The best way to prevent problems is to is to seek professional
              guidance. Hire us, your certified National Wood Flooring
              professionals, to achieve your flooring goals and wishes.
            </p>
          </div>
          <div>
            <p>
              Also if you are unsure about what type of wood flooring
              restoration service is best for you, we do provide a free
              consultation where we come to you with our Mobile Showroom.
            </p>
            <p>
              In that way we can help show you our economically priced service
              options, and help you decide what types of wood floor restoration
              is best for your needs.
            </p>
          </div>
        </div>
        <div className={styles.servicesWrapper}>
          {SERVICES.map((service) => (
            <Service key={service.href} {...service} />
          ))}
        </div>
      </article>
      <article className={styles.pricing}>
        <h2>Wood Floor Refinishing</h2>
        <p>Service Price Plans</p>
        <div>
          <div className={styles.left}>
            <h3>WOOD FLOOR BUFF & COAT</h3>
            <div className={styles.pricingSection}>
              <p>$1.99 per Sq. Foot</p>
              <p>$500 Minimum</p>
              <p>With 1 Coat</p>
            </div>
            <div className={styles.pricingSection}>
              <h4>Additional Coats:</h4>
              <p>50 cents / Sq. Foot</p>
            </div>
          </div>
          <div className={styles.right}>
            <h3>WOOD FLOOR SAND & FINISH</h3>
            <div className={styles.pricingSection}>
              <p>$3.99 per Sq. Foot</p>
              <p>$500 Minimum</p>
              <p>With 3 Coats</p>
            </div>
            <div className={styles.pricingSection}>
              <h4>Additional Coats:</h4>
              <p>50 cents / Sq. Foot</p>
            </div>
            <div className={styles.pricingSection}>
              <h4>Add Wood Stain:</h4>
              <p>75 cents / Sq. Foot</p>
            </div>
          </div>
        </div>
        <p>
          <strong>Additional Services:</strong> $75 / man-hour
        </p>
      </article>
      <form className={styles.contact}>
        <div className={styles.left}>
          <h3>
            Your are only
            <br />
            10 minutes away
            <br />
            from the help you need!
          </h3>
          <h4>
            Call Us Now: <a href="tel:+17272672617">+1-727-267-2617</a>
          </h4>
        </div>
        <div className={styles.right}>
          <input placeholder="Name" ref={nameRef} type="text" />
          <input placeholder="Email" ref={emailRef} type="email" />
          <textarea placeholder="Message" ref={messageRef} />
          <button disabled={sent} onClick={handleSubmit}>
            {sent ? "MESSAGE SENT" : "SEND"}
          </button>
        </div>
      </form>
      <Testimonials />
      <Credentials />
    </div>
  );
}

interface ServiceProps {
  href: string;
  title: string;
  photo: string;
}

const Service = ({ href, title, photo }: ServiceProps) => {
  return (
    <Link className={styles.service} href={href}>
      <figure>
        <Image src={photo} alt={title} width={290} height={222} />
        <figcaption>
          <span>{title}</span>
          <FaChevronCircleRight color="#666666" size={36} />
        </figcaption>
      </figure>
    </Link>
  );
};
