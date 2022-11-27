import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next";
import { PROJECTS, Project } from ".";
import { FaArrowLeft } from "react-icons/fa";

import styles from "./Projects.module.scss";

export default function Slug({ project }: { project: Project }) {
  const { created, image, location, slug, tags, title, children } = project;
  const headtitle = `${title} | Royal Richey Restoration`;

  const dateOptions = {
    day: "numeric",
    weekday: "long",
    month: "short",
    year: "numeric",
  };

  return (
    <div>
      <Head>
        <title>{headtitle}</title>
      </Head>
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
      <Link href="/projects">
        <h2 className={`${styles.heading} ${styles.link}`}>
          <FaArrowLeft size={30} />
          Projects
        </h2>
      </Link>
      <div className={styles.slug}>
        <Image src={image} alt={title} width={1200} height={800} />
        <div className={styles.meta}>
          <p className={styles.posted}>
            Posted:{" "}
            <em>
              {new Date(created).toLocaleDateString(
                "en-US",
                dateOptions as any
              )}
            </em>
          </p>
          <p className={styles.tags}>
            Tags: <em>{tags.length > 1 ? tags.join(", ") : tags[0]}</em>
          </p>
        </div>
        <article className={styles.details}>
          <h3>{title}</h3>
          {children && (
            <div dangerouslySetInnerHTML={{ __html: children as string }} />
          )}
        </article>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = PROJECTS.find(({ slug }) => slug === params?.slug);
  if (!project) {
    throw new Error(
      `Project with slug '${params?.slug ?? "undefined"}' not found`
    );
  }

  return {
    props: {
      project,
    },
    revalidate: 200,
  };
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  return {
    paths: PROJECTS.map((project) => `/projects/${project.slug}`),
    fallback: "blocking",
  };
};
