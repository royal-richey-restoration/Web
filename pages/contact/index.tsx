import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FaMapMarkerAlt, FaMailBulk, FaPhoneAlt } from "react-icons/fa";

import styles from "./Contact.module.scss";
import Link from "next/link";

export default function Contact({}) {
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
    <article>
      <Head>
        <title>Contact | Royal Richey Restoration</title>
      </Head>
      <div className={styles.banner}>
        <Image
          src="/images/heading-banner.jpg"
          alt=""
          priority
          width={1920}
          height={575}
        />
        <h1>Contact</h1>
      </div>
      <div className={styles.contact}>
        <article className={styles.left}>
          <h2>Send Message</h2>
          <input placeholder="Name" ref={nameRef} type="text" />
          <input placeholder="Email" ref={emailRef} type="email" />
          <textarea placeholder="Message" ref={messageRef} />
          <button disabled={sent} onClick={handleSubmit}>
            {sent ? "MESSAGE SENT" : "SEND"}
          </button>
        </article>
        <article className={styles.right}>
          <h2>Contact Details</h2>
          <div>
            <div className={styles.iconWrapper}>
              <FaMapMarkerAlt color="#FFFFFF" size={24} />
            </div>
            <address>
              <h3>Address</h3>
              <p>6026 Oak Ridge Ave.</p>
              <p>New Port Richey, FL 34653</p>
            </address>
          </div>
          <Link href="mailto:royalwoodfloors@gmail.com">
            <div className={styles.iconWrapper}>
              <FaMailBulk color="#FFFFFF" size={24} />
            </div>
            <address>
              <h3>Email</h3>
              <p>royalwoodfloors@gmail.com</p>
            </address>
          </Link>
          <Link href="tel:+17272672617">
            <div className={styles.iconWrapper}>
              <FaPhoneAlt color="#FFFFFF" size={24} />
            </div>
            <address>
              <h3>Phone</h3>
              <p>+1-727-267-2617</p>
            </address>
          </Link>
        </article>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14059.421701792022!2d-82.72355203193!3d28.24206750839541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c291ca5ca6aaab%3A0xf7939dfcbb6fd8b0!2sRoyal%20Wood%20Floors!5e0!3m2!1sen!2sus!4v1591164975674!5m2!1sen!2sus"
        width="100%"
        height="450"
        className={styles.map}
      ></iframe>
    </article>
  );
}
