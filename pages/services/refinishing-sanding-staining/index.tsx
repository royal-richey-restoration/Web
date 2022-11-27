import Head from "next/head";

import { ServicePage } from "../../../components";

export default function RefinishingSandingStaining() {
  return (
    <div>
      <Head>
        <title>
          Refinishing, Sanding & Staining | Royal Richey Restoration
        </title>
      </Head>
      <ServicePage
        pageHref="/services/refinishing-sanding-staining"
        photo="/images/services/sanding.jpg"
        title={
          <>
            Wood Floor Refinishing, <br />
            Sanding, & Staining
          </>
        }
      >
        <p>
          This process involves a rough, medium, and fine sanding with our top
          of the line Hummel Floor Sanding Machines.
        </p>
        <ul>
          <li>
            <p>
              We buff the entire floor and scrape all the corners so it can then
              be either stained or finished.
            </p>
          </li>
          <li>
            <p>
              We do this additional step to attain a deeper more consistent
              color to the floor.
            </p>
          </li>
          <li>
            <p>
              We then apply the stain and 3 coats of water base finish with our
              premium plan.
            </p>
          </li>
          <li>
            <p>We include water popping at no extra charge.</p>
          </li>
        </ul>
        <p>
          Most companies only stain and then apply <strong>two</strong> coats to
          save money.
        </p>
        <p>
          We offer an economy plan where you get the same craftsmanship, but the
          difference is that we apply <strong>three</strong> coats of an
          oil-base polyurethane.
        </p>
        <p>Our premium plan includes three coats of water-base polyurethane.</p>
        <p>
          You can choose a sheen level of matte, satin, semi-gloss, or gloss at
          no additional charge. We have Dust free equipment that is up to par
          with the industry standard at no additional charge as well.
        </p>
      </ServicePage>
    </div>
  );
}
