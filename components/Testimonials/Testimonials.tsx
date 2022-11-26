import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Carousel } from "../Carousel";
import styles from "./Testimonials.module.scss";

export const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <article>
        <h2>Client Testimonials</h2>
        <p>Positive feedback from our own real, past clients</p>
        <Carousel>
          <div className={styles.testimonialWrapper}>
            <FaQuoteLeft />
            <p>
              Our hardwood flooring specialist, Keith from Royal Wood Floors,
              did an excellent job on our wood floor refinishing. He was
              knowledgeable and a highly skilled craftsman. The result was
              exactly what we wanted and it was finished on time. Awesome job.
            </p>
            <FaQuoteRight />
          </div>
          <div className={styles.testimonialWrapper}>
            <FaQuoteLeft />
            <p>
              The Royal Wood Floors wood floor buff and coat job was great. The
              pricing was fair and the results were fantastic.
            </p>
            <FaQuoteRight />{" "}
          </div>
          <div className={styles.testimonialWrapper}>
            <FaQuoteLeft />
            <p>
              I came to Royal Wood Floors with a dilemma of sorts. The wood I
              wanted had to be special ordered and I couldn’t seem to find
              anyone that could do it. Keith went above and beyond to ensure
              that the special order of wood and the necessary wood floor
              installation services were a success. The crew was very pleasant
              and provided a lot of help by answering all my questions
              throughout the process. Thank you for a fantastic job, the floors
              are immaculate.
            </p>
            <FaQuoteRight />
          </div>
          <div className={styles.testimonialWrapper}>
            <FaQuoteLeft />
            <p>
              I had the original hardwood floors of my 60 year old house redone.
              After the initial consultation with Keith of Royal Wood Floors, It
              turned out that all they really needed was floor refinishing work.
              The team arrived on time and they worked quickly and
              professionally. I decided I wanted the floors to have a higher
              gloss finish so they came back the very next day and added a
              second coat with no additional charges. I was very impressed with
              the final results and the courteous of their staff.
            </p>
            <FaQuoteRight />
          </div>
          <div className={styles.testimonialWrapper}>
            <FaQuoteLeft />
            <p>
              Royal Wood Floors did an incredible job on hardwood floor
              installation work. My floors are so much better than I could have
              ever imagined. From my first contact with Keith Allman I knew that
              he really was a professional and would do professional work. The
              team that came out was pleasant and professional as well. The team
              really cared about the results being exactly what I had pictured.
              I couldn’t have asked for a better experience.
            </p>
            <FaQuoteRight />
          </div>
          <div className={styles.testimonialWrapper}>
            <FaQuoteLeft />
            <p>
              My husband and I are very happy with the quality results of our
              wood flooring installation. The crew from Royal Wood Floors that
              did the installation worked hard to finish my amazing new wood
              floors. Thank you.
            </p>
            <FaQuoteRight />
          </div>
          <div className={styles.testimonialWrapper}>
            <FaQuoteLeft />
            <p>
              My hardwood floors are more beautiful than I could have ever
              imagined. Keith and his staff were pleasant and professional. I
              couldn’t have asked for a better experience. Thank you for a great
              job!
            </p>
            <FaQuoteRight />
          </div>
          <div className={styles.testimonialWrapper}>
            <FaQuoteLeft />
            <p>
              The Royal Wood Floors staff is awesome. We had a very difficult
              hard wood flooring restoration job to do, and this company
              provided the perfect solutions and pricing. One cannot see where
              the old and new floor. We love the results we got. Thank you guys
              for a great job.
            </p>
            <FaQuoteRight />
          </div>
          <div className={styles.testimonialWrapper}>
            <FaQuoteLeft />
            <p>
              I had the pleasure of working with Keith of Royal Wood Floors on
              our offices wood flooring installation. He provided thorough
              information before and during the whole process. The team was on
              time and the floors were completed promptly so that we can open
              our doors back up for business. Beautiful job! Thanks!!
            </p>
            <FaQuoteRight />
          </div>
          <div className={styles.testimonialWrapper}>
            <FaQuoteLeft />
            <p>
              Royal Wood Floors did a fantastic job on my hardwood floor
              restoration. The team was on time as scheduled, courteous, clean
              and the results are excellent.
            </p>
          </div>
        </Carousel>
      </article>
    </div>
  );
};
