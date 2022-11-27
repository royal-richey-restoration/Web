import Head from "next/head";

import { ServicePage } from "../ServicePage";

export default function WoodFloorBuffingRecoating() {
  return (
    <div>
      <Head>
        <title>Buffing & Recoating | Royal Richey Restoration</title>
      </Head>
      <ServicePage
        pageHref="/services/buffing-recoating"
        photo="/images/services/buffing.jpg"
        title="Wood Floor Buffing & Recoating"
      >
        <p>
          Buffing and coating procedures restore the beauty of your hardwood
          flooring and also engages a new protective top coat to preserve and
          prevent them from daily wear and tear.
        </p>
      </ServicePage>
    </div>
  );
}
