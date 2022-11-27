import Head from "next/head";

import { ServicePage } from "../../../components";

export default function FlooringConsultation() {
  return (
    <div>
      <Head>
        <title>Flooring Consultation | Royal Richey Restoration</title>
      </Head>
      <ServicePage
        pageHref="/services/flooring-consultation"
        photo="/images/services/custom.jpg"
        title="Custom Flooring Consultation"
      >
        <p>
          We offer professional consulting for your flooring project Incase you
          already have a company that you wish to work with.
        </p>
        <p>
          We will go over all the details of the project methodology and pricing
          to make sure you are getting good quality at a fair price.
        </p>
      </ServicePage>
    </div>
  );
}
