import React from "react";
import { useContext } from "react";
import { shoesStore } from "../../Store/contextAPI.js";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import Section from "../Section";
import BlogSectionStyle2 from "../Section/BlogSection/index.jsx";
import Breadcrumb from "../Breadcrumb";
import { pageTitle } from "../../helpers/PageTitle";

export default function Blog() {
  const ctx = useContext(shoesStore);
  const { blogData } = ctx.HomeData;

  pageTitle("Blog");
  return (
    <>
      <Section topMd={170} bottomMd={96} bottomLg={70}>
        <Breadcrumb title="Psychology and Life St yle" />
      </Section>
      <Section bottomMd={200} bottomLg={150} bottomXl={110}>
        <BlogSectionStyle2 data={blogData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
          imgUrl="/images/footer/backSeat.png"
        />
      </Section>
    </>
  );
}
