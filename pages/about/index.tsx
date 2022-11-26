import Head from "next/head";
import Image from "next/image";

import styles from "./About.module.scss";

export default function About({}) {
  return (
    <article>
      <Head>
        <title>About | Royal Richey Restoration</title>
      </Head>
      <div className={styles.banner}>
        <Image
          src="/images/heading-banner.jpg"
          alt=""
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
              Florida, there is only one answer: Royal Wood Floors. For more
              than 20 years now, Keith Allman, founder of Royal Wood Floors, has
              been overseeing and personally installing some the most gorgeous
              and elaborate hardwood floors and custom installation artwork.
              Their wood floor refinishing services provided are some of the
              best quality in the nation.
            </p>
            <p>
              In this age of eco-consciosness, Royal Wood Floors is leading the
              pack with their “go green” themed ideology. They use a well
              maintained fleet of fuel efficient vehicles and also offer bamboo
              flooring which is the world’s most renewable wood source, causing
              no lingering damage to the environment.
            </p>
            <p>
              If you are looking for a new beautiful hardwood floor or wood
              floor refinishing for your home or business, your search ends with
              Royal Wood Floors.
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
    </article>
  );
}
