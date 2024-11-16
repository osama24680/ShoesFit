import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Blog from "./components/Pages/Blog";
import BlogDetails from "./components/Pages/BlogDetails";
import Gallery from "./components/Pages/Gallery";
import Models from "./components/Pages/Models";
import ModelDetails from "./components/Pages/ModelDetails";
import Contact from "./components/Pages/Contact";
import ErrorPage from "./components/Pages/ErrorPage";

import Doctors from "./components/Pages/Doctors";
import Appointments from "./components/Pages/Appointments";
import DoctorDetails from "./components/Pages/DoctorDetails";
import PricingPlan from "./components/Pages/PricingPlan";
import Timetable from "./components/Pages/Timetable";


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:idBlogPost" element={<BlogDetails />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="models" element={<Models />} />
        <Route path="models/:modelId" element={<ModelDetails />} />
        <Route path="contact" element={<Contact />} />

        {/* <Route path="doctors" element={<Doctors />} /> */}
        {/* <Route path="doctors/:doctorId" element={<DoctorDetails />} /> */}
        {/* <Route path="appointments" element={<Appointments />} /> */}

        {/* <Route path="pricing-plan" element={<PricingPlan />} /> */}

        {/* <Route path="timetable" element={<Timetable />} /> */}
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
