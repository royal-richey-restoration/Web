import Head from "next/head";

import { ServicePage } from "../../../components";

export default function BaseboardTrimInstallation() {
  return (
    <div>
      <Head>
        <title>Baseboard & Trim Installation | Royal Richey Restoration</title>
      </Head>
      <ServicePage
        pageHref="/services/baseboard-trim-installation"
        photo="/images/services/trim.jpg"
        title="Baseboard & Trim Installation"
      >
        <p>
          There are options available to either reinstall your existing
          baseboard and shoe or install brand new baseboards and or shoe molding
          of your choice.
        </p>
        <p>
          There are many different options to choose from to compliment your new
          or existing floors.
        </p>
      </ServicePage>
    </div>
  );
}
