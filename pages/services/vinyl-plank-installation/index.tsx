import Head from "next/head";

import { ServicePage } from "../ServicePage";

export default function FloorBuffingRecoating() {
  return (
    <article>
      <Head>
        <title>Vinyl Plank Installation | Royal Richey Restoration</title>
      </Head>
      <ServicePage
        pageHref="/services/vinyl-plank-installation"
        photo="/images/services/linyl.jpg"
        title="Luxury Vinyl Plank Installation"
      >
        <p>
          LVP allows you to achieve the look of hardwood or tile at a fraction
          of the cost.
        </p>
        <p>LVP is 100% waterproof and easy to clean and maintain.</p>
        <p>
          LVP is also scratch resistant to help keep floors looking newer for
          longer.
        </p>
      </ServicePage>
    </article>
  );
}
