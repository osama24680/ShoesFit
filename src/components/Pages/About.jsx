import React from "react";
import { useContext } from "react";
import { shoesStore } from "../../Store/contextAPI.js";
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle9 from "../Section/BannerSection/BannerSectionStyle9";
import Section from "../Section";
import DepartmentSectionStyle2 from "../Section/DepartmentSection/DepartmentSectionStyle2";
import FeaturesSectionStyle2 from "../Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "../Section/FunFactSection";
import TeamSection from "../Section/TeamSection";
import GallerySection from "../Section/GallerySection";
import AwardSectionStyle2 from "../Section/AwardSection/AwardSectionStyle2";
import { pageTitle } from "../../helpers/PageTitle";

export default function About() {
  const ctx = useContext(shoesStore);
  const {
    departmentData,
    featureListData,
    funFactData,
    teamData,
    galleryData,
    awardData,
  } = ctx.AboutData;

  pageTitle("About");
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="/images/about/banner_img.png"
        title="Welcome to <br />shoesFit Medical & Healthcare Center"
        subTitle="Your Partner in Health and Wellness through Innovative Technology."
      />
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="Provides Our Best Services"
          sectionTitleUp="SERVICES"
          data={departmentData}
        />
      </Section>

      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="Why ShoesFit ?"
          imgUrl="images/about/why_choose_us.png"
          data={featureListData}
        />
      </Section>

      <Section>
        <FunFactSection
          bgUrl="images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section>

      <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="Experts Team"
          sectionTitleUp="MEET OUR"
          data={teamData}
        />
      </Section>

      <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="Our Device and <br />Latest Activities"
          sectionTitleUp="HAVE A LOOK AT"
          data={galleryData}
        />
      </Section>

      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="Winning Awards and <br />Recognition"
          sectionTitleUp="AWARDS"
          sectionSubTitle="We have been recognized for our commitment to <br />excellence in healthcare."
          data={awardData}
        />
      </Section>

      <Section className="cs_footer_margin_0">
        <BannerSectionStyle9
          imgUrl="images/footer/backSeat.png"
          title="Don’t Let Your Health <br />Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced <br />medical professionals today!"
        />
      </Section>
    </>
  );
}
