import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { appRoutes } from "../routes/appRoutes";

import "./Page.scss";

const Page = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to={appRoutes.PAGE_1} />;
  }

  return (
    <div className="page">
      <h1 className="page__title">Page {id}</h1>
      <p className="page__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
        fermentum enim. Quisque posuere magna quis vulputate varius. Donec
        ultrices fringilla metus at porttitor. Nulla non orci dolor. Praesent
        scelerisque rhoncus tortor, nec accumsan urna mollis vel. Donec sodales
        dolor a orci tincidunt auctor nec quis purus. Praesent tempor mi
        fringilla odio tempus, sed varius dui tincidunt. Maecenas imperdiet
        ipsum vel tellus posuere, ac congue urna vestibulum. Quisque ut odio et
        sapien condimentum mollis. Nunc bibendum scelerisque purus eget
        scelerisque. Nulla porttitor non ipsum ut egestas. Aliquam non augue
        eget libero interdum pulvinar. Vivamus pellentesque ornare eros, vitae
        pellentesque velit viverra sed. Phasellus tristique, ex et vestibulum
        molestie, risus diam fermentum diam, ac ullamcorper libero dui et eros.
      </p>
      <p className="page__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
        fermentum enim. Quisque posuere magna quis vulputate varius. Donec
        ultrices fringilla metus at porttitor. Nulla non orci dolor. Praesent
        scelerisque rhoncus tortor, nec accumsan urna mollis vel. Donec sodales
        dolor a orci tincidunt auctor nec quis purus. Praesent tempor mi
        fringilla odio tempus, sed varius dui tincidunt. Maecenas imperdiet
        ipsum vel tellus posuere, ac congue urna vestibulum. Quisque ut odio et
        sapien condimentum mollis. Nunc bibendum scelerisque purus eget
        scelerisque. Nulla porttitor non ipsum ut egestas. Aliquam non augue
        eget libero interdum pulvinar. Vivamus pellentesque ornare eros, vitae
        pellentesque velit viverra sed. Phasellus tristique, ex et vestibulum
        molestie, risus diam fermentum diam, ac ullamcorper libero dui et eros.
      </p>
      <p className="page__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
        fermentum enim. Quisque posuere magna quis vulputate varius. Donec
        ultrices fringilla metus at porttitor. Nulla non orci dolor. Praesent
        scelerisque rhoncus tortor, nec accumsan urna mollis vel. Donec sodales
        dolor a orci tincidunt auctor nec quis purus. Praesent tempor mi
        fringilla odio tempus, sed varius dui tincidunt. Maecenas imperdiet
        ipsum vel tellus posuere, ac congue urna vestibulum. Quisque ut odio et
        sapien condimentum mollis. Nunc bibendum scelerisque purus eget
        scelerisque. Nulla porttitor non ipsum ut egestas. Aliquam non augue
        eget libero interdum pulvinar. Vivamus pellentesque ornare eros, vitae
        pellentesque velit viverra sed. Phasellus tristique, ex et vestibulum
        molestie, risus diam fermentum diam, ac ullamcorper libero dui et eros.
      </p>
    </div>
  );
};

export default Page;
