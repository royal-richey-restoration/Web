import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { Credentials, Testimonials } from "../../components";

import styles from "./About.module.scss";

const IMAGES = [
  "/images/about/about1.jpg",
  "/images/about/about2.jpg",
  "/images/about/about3.jpg",
  "/images/about/about4.jpg",
  "/images/about/about5.jpg",
  "/images/about/about6.jpg",
  "/images/about/about7.jpg",
  "/images/about/about8.jpg",
  "/images/about/about9.jpg",
  "/images/about/about10.jpg",
  "/images/about/about11.jpg",
  "/images/about/about12.jpg",
  "/images/about/about13.jpg",
  "/images/about/about14.jpg",
  "/images/about/about15.jpg",
  "/images/about/about16.jpg",
  "/images/about/about17.jpg",
  "/images/about/about18.jpg",
  "/images/about/about19.jpg",
  "/images/about/about20.jpg",
  "/images/about/about21.jpg",
  "/images/about/about22.jpg",
  "/images/about/about23.jpg",
  "/images/about/about24.jpg",
  "/images/about/about25.jpg",
  "/images/about/about26.jpg",
  "/images/about/about27.jpg",
];

export default function About({}) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const increment = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveIndex((prev) => {
      if (prev === null) return null;
      if (prev === IMAGES.length - 1) return 0;
      return prev + 1;
    });
  };

  const decrement = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveIndex((prev) => {
      if (prev === null) return null;
      if (prev === 0) return IMAGES.length - 1;
      return prev - 1;
    });
  };

  return (
    <>
      <article>
        <Head>
          <title>About | Royal Richey Restoration</title>
        </Head>
        <div className={styles.banner}>
          <Image
            src="/images/heading-banner.jpg"
            alt=""
            priority
            width={1920}
            height={575}
          />
          <h1>About Us</h1>
        </div>
        <article className={styles.about}>
          <h2>{"Why We're the Best!"}</h2>
          <div>
            <div className={styles.left}>
              <h3>
                From the Sistine Chapel to Madison Square Garden, people love to
                see great wood floors.
              </h3>
              <p>
                And, when it comes to beautiful and ornate hardwood floors in
                Florida, there is only one answer: Royal Richey Restoration. For
                more than 20 years now, Keith Allman, founder of Royal Richey
                Restoration, has been overseeing and personally installing some
                the most gorgeous and elaborate hardwood floors and custom
                installation artwork. Their wood floor refinishing services
                provided are some of the best quality in the nation.
              </p>
              <p>
                In this age of eco-consciosness, Royal Richey Restoration is
                leading the pack with their “go green” themed ideology. They use
                a well maintained fleet of fuel efficient vehicles and also
                offer bamboo flooring which is the world’s most renewable wood
                source, causing no lingering damage to the environment.
              </p>
              <p>
                If you are looking for a new beautiful hardwood floor or wood
                floor refinishing for your home or business, your search ends
                with Royal Richey Restoration.
              </p>
              <h4>
                Call Us Today for your free estimate:{" "}
                <a href="tel:+17272672617"> 727-267-2617</a>
              </h4>
            </div>
            <div className={styles.right}>
              <iframe
                src="https://www.youtube.com/embed/VzrNnkPTiWo"
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </article>
        <article className={styles.imageGallery}>
          <h2>Image Gallery</h2>
          <div>
            {IMAGES.map((src, index) => (
              <Image
                alt=""
                height={800}
                key={src}
                onClick={() => setActiveIndex(index)}
                src={src}
                width={1200}
              />
            ))}
          </div>
        </article>
        <Testimonials />
        <Credentials />
      </article>
      {activeIndex !== null && (
        <div
          onClick={() => setActiveIndex(null)}
          className={styles.modalBackground}
        >
          <FaChevronCircleLeft color="grey" size={44} onClick={decrement} />
          <Image
            onClick={(e) => e.stopPropagation()}
            src={IMAGES[activeIndex]}
            alt=""
            width={1200}
            height={800}
          />
          <FaChevronCircleRight color="grey" size={44} onClick={increment} />
        </div>
      )}
    </>
  );
}
