import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "./Projects.module.scss";

export interface Project extends React.PropsWithChildren {
  created: string;
  image: string;
  location: string;
  slug: string;
  tags: string[];
  title: string;
}

export const PROJECTS: Project[] = [
  {
    children: `<p>Needless to say the winter of 2014 was one for the record books here in Florida for being one of the coldest in a long time. On Jan 10th I met with Jim at the Morningstar Golf Club and gave him a detailed proposal on the project for refinishing their hardwood floors. I must say that I really took an interest to help these folks out seeing as this is one of my favorite courses to play.</p>
      <p>Jim and I came to terms and we started the project on Saturday, February 15 at 9:00 a.m.. It was bitter cold that mourning and we new we were in for a long day. The floors were in rough shape so we got started and completed Phase 1 by Thursday the 20th just in time for the Friday fish fry ( which is fantastic by the way ).</p>
      <p>After working 6 days in row we were very proud of what we had accomplished — a job well done and right in the nick of time. We came back to finish Phase 2 on March 3rd, and working through to March 6th — completing that phase on time and on budget.</p>
      <p>Jim thanked us for a job well done and we appreciate the opportunity to serve such a great Golfers club.</p>`,
    created: new Date("2 Jun 2014").toISOString(),
    image: "/images/projects/project1a.jpg",
    location: "Florida",
    slug: "morningstar-golfers-club",
    tags: ["Event Venues", "Custom"],
    title: "Morningstar Golfing Club",
  },
  {
    children: `<p>Project description... coming soon.</p>`,
    created: new Date("3 Jun 2014").toISOString(),
    image: "/images/projects/project2a.jpg",
    location: "Florida",
    slug: "kitchen-wood-floor-installation",
    tags: ["Kitchens", "Custom", "Installation"],
    title: "Kitchen Wood Floor",
  },
  {
    children: `<p>Project description... coming soon.</p>`,
    created: new Date("4 Jun 2014").toISOString(),
    image: "/images/projects/project3a.jpg",
    location: "Florida",
    slug: "living-room-floor-replacement",
    tags: ["Kitchens", "Replacement", "Custom"],
    title: "Living Room Floor Replacement",
  },
  {
    children: `<p>Project description... coming soon.</p>`,
    created: new Date("5 Jun 2014").toISOString(),
    image: "/images/projects/project4a.jpg",
    location: "Florida",
    slug: "wooden-staircase-replacement",
    tags: ["Staircase", "Replacement", "Custom"],
    title: "Wooden Staircase Replacement",
  },
];

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects | Royal Richey Restoration</title>
      </Head>
      <div className={styles.banner}>
        <Image
          src="/images/heading-banner.jpg"
          alt=""
          priority
          width={1920}
          height={575}
        />
        <h1>Projects</h1>
      </div>
      <h2 className={styles.heading}>Our Projects</h2>
      <div className={styles.projectsWrapper}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}

const ProjectCard = ({ image, slug, tags, title }: Project) => {
  return (
    <Link href={`/projects/${slug}`} className={styles.card}>
      <figure>
        <Image src={image} alt={title} height={800} width={1200} />
        <figcaption>{title}</figcaption>
        <p>
          Tags: <em>{tags.length > 1 ? tags.join(", ") : tags[0]}</em>
        </p>
      </figure>
    </Link>
  );
};
