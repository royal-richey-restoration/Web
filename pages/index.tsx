import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";

import { Credentials, Testimonials } from "../components";

import styles from "../styles/Home.module.scss";

export default function Home() {
  const [active, setActive] = React.useState(1);
  const [prev, setPrev] = React.useState(0);
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
    <div className={styles.container}>
      <Head>
        <title>Royal Richey Restoration</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.carousel}>
          <Image
            priority
            src="/images/home/home1.jpg"
            alt=""
            width="1918"
            height="960"
          />
        </div>
        <article className={styles.banner}>
          <h2>COMMERCIAL AND RESIDENTIAL HARDWOOD FLOORING SERVICES</h2>
          <h1>Serving Pasco, Pinellas and Hillsborough Counties in Florida</h1>
          <p>Continuing the craftsmanship of yesteryear...</p>
          <p>We have been in the wood flooring business for 20 years.</p>
          <address>
            Call us:{" "}
            <Link href="tel:+17272672617" className={styles.phone}>
              727-267-2617
            </Link>
          </address>
          <div>
            <Link href="/about">
              <button>ABOUT US</button>
            </Link>
            <Link href="/contact">
              <button>CONTACT US</button>
            </Link>
          </div>
        </article>
        <div className={styles.welcome}>
          <article>
            <h2>Welcome to Royal Wood Floors</h2>
            <p>
              Our company started in year 2000 in Milwaukee, Wisconsin, We
              serviced that area for 15 years, then relocated to{" "}
              <strong>New Port Richey Florida</strong>, and have been servicing
              this and surrounding areas to this day.
            </p>
            <p>
              We pride ourselves as a full service hardwood flooring Restoration
              company that is proficient in all aspects of wood flooring
              renewal. Contact us today for the solution to all your flooring
              issues and needs.
            </p>
            <Link href="/about">
              <button>READ MORE</button>
            </Link>
          </article>
          <div>
            <form>
              <h2>REQUEST A CALLBACK</h2>
              <div>
                <div className={styles.iconWrapper}>
                  <FaPaperPlane color="#FFFFFF" width={32} height={32} />
                </div>
              </div>
              <div className={styles.formWrapper}>
                <input placeholder="Name" ref={nameRef} type="text" />
                <input placeholder="Email" ref={emailRef} type="email" />
                <textarea placeholder="Message" ref={messageRef} />
                <button disabled={sent} onClick={handleSubmit}>
                  {sent ? "MESSAGE SENT" : "SEND"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.subBanner}>
          <article>
            <h2>Serving Our Clients for Over 20 Years</h2>
            <div>
              <div>
                <p>Continuing the craftsmanship of yesteryear</p>
                <p>Contact us now for a free visit and consultation.</p>
              </div>
              <Link href="/contact">
                <button>Contact Us</button>
              </Link>
            </div>
          </article>
        </div>
        <Testimonials />
        <Credentials />
      </main>
    </div>
  );
}
