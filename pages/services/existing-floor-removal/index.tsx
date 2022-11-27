import Head from "next/head";

import { ServicePage } from "../../../components";

export default function FloorRemoval() {
  return (
    <article>
      <Head>
        <title>Existing Floor Removal | Royal Richey Restoration</title>
      </Head>
      <ServicePage
        pageHref="/services/existing-floor-removal"
        photo="/images/services/remove.jpg"
        title="Existing Floor Removal"
      >
        <p>
          Tired of looking at that old beat up floor? Not a problem we will
          remove your old existing flooring, and prep it for your new, beautiful
          wood flooring.
        </p>
        <p>
          This process is done with utmost care and dust mitigation as possible.
          We will also dispose of and hall away all debris from the site.
        </p>
        <p>
          The DIY route can be, of course, the most economical option. However,
          certain types of floor removal is best left to the professionals.
        </p>
        <p>
          Another reason to have the profesionals at Royal Wood Floor remove
          your existing floor is not only much better dust-mitigation, but also
          implementing cautionary methods to protect your under-flooring from
          unexpected damage — as well as your walls and furtniture.
        </p>
        <p>
          We are proficient and meticulous about our making our work flawless
          and leaving you with an excellent foundation for your new flooring
          project.
        </p>
      </ServicePage>
    </article>
  );
}
