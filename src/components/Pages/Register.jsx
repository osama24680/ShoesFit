import React from "react";
import Form from "../Form/Form.jsx";
import { useContext } from "react";
import { shoesStore } from "../../Store/contextAPI.js";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3.jsx";
import Section from "../Section/index.jsx";

import { pageTitle } from "../../helpers/PageTitle.js";

export default function Register() {
  const ctx = useContext(shoesStore);
  // const { blogData } = ctx.HomeData;

  pageTitle("Blog")
  return (
    <>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle3
          bgUrl="/images/about/banner_bg.svg"
          imgUrl="/images/about/banner_img.png"
          title="Explore the Power of AI with ShoesFit"
          subTitle="Revolutionizing health and wellness through advanced machine learning."
        />
        <Form />
      </Section>
    </>
  );
}
