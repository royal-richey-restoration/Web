import Head from "next/head";

export default function Contact({}) {
  return (
    <article>
      <Head>
        <title>Contact | Royal Richey Restoration</title>
      </Head>
      <h1>Contact</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14059.421701792022!2d-82.72355203193!3d28.24206750839541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c291ca5ca6aaab%3A0xf7939dfcbb6fd8b0!2sRoyal%20Wood%20Floors!5e0!3m2!1sen!2sus!4v1591164975674!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: "none" }}
      ></iframe>
    </article>
  );
}
