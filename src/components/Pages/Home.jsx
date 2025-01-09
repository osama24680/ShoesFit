import React from "react";
import { useContext } from "react";
import { shoesStore } from "../../Store/contextAPI.js";
import Hero from "../Hero";
import AboutSection from "../Section/AboutSection";
import Banner from "../Section/BannerSection";
import Section from "../Section";
import FeaturesSection from "../Section/FeaturesSection";
import TestimonialSection from "../Section/TestimonialSection";
import BlogSection from "../Section/BlogSection";
import AppointmentSection from "../Section/AppointmentSection";
import FaqSection from "../Section/FaqSection";
import { pageTitle } from "../../helpers/PageTitle";

export default function Home() {
  const ctx = useContext(shoesStore);
  const { featureListData, faqData, blogData } = ctx.HomeData;

  pageTitle("Home");
  return (
    <>
      <Hero
        title="Revolutionize Your Health with Smart Footwear"
        subTitle="We are committed to providing you with the best medical and healthcare services to help you live healthier and happier."
        bgUrl="/images/home_1/hero_bg.jpeg"
        imgUrl="images/home_1/hero_img.png"
        videoBtnText="See how we work"
        videoUrl="/images/home_1/60s.mp4"
        infoList={[
          {
            title: "Hotline",
            subTitle: "01127796848",
            iconUrl: "/images/contact/icon_1.svg",
          },
          {
            title: "E-Mail",
            subTitle: "shoesfit@gmail.com",
            iconUrl: "/images/icons/ambulance.svg",
          },
          {
            title: "Location",
            subTitle: "Alexandria, Eg",
            iconUrl: "/images/icons/pin.svg",
          },
        ]}
        btnText="Book Now"
        btnUrl="/appointments"
      />
      {/* Feature Section */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection sectionTitle="Our Values" data={featureListData} />
      </Section>

      {/* About Section */}
      <Section>
        <AboutSection
          imgUrl="/images/home_1/about.jpg"
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="About Us"
          subTitle="SHOES FIT"
          featureList={[
            {
              featureListTitle:
                "ShoesFit is a team of experienced medical professionals",
              featureListSubTitle:
                "To enhance the quality of life through innovative smart footwear that provides real-time health monitoring.",
            },
          ]}
        />
      </Section>

      {/* Testimonial */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSection
          sectionTitle="Some Reviews"
          sectionTitleDown="Of our clients"
        />
      </Section>

      {/* Banner Section */}
      <Section>
        <Banner
          bgUrl="images/home_1/cta_bg.svg"
          imgUrl="images/home_1/cta_img.png"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced medical professionals today!"
        />
      </Section>

      {/* Blog Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <BlogSection
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          data={blogData.slice(0, 3)}
        />
      </Section>

      {/* Appointment Section */}
      <Section topMd={190} topLg={145} topXl={105} id="appointment">
        <AppointmentSection
          sectionTitle="Appointment (Soon)"
          sectionTitleUp="BOOK AN"
          imgUrl="/images/home_1/appointment.jpeg"
        />
      </Section>

      {/* FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>
    </>
  );
}
