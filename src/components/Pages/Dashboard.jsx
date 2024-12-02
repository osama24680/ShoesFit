import React from 'react'
import BannerSectionStyle3 from "../Section/BannerSection/BannerSectionStyle3";
import DashboardCharts from '../Dashboard/DashboardCharts.jsx';
import Spacing from '../Spacing/index.jsx';
const Dashboard = () => {
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl="/images/about/banner_img.png"
        title="Explore the Power of AI with ShoesFit"
        subTitle="Revolutionizing health and wellness through advanced machine learning."
      />
      {/* <Spacing md="72" lg="50" /> */}
      <DashboardCharts />
      <Spacing md="72" lg="50" />
    </>
  );
}

export default Dashboard