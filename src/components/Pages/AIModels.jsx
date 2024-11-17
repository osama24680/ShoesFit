import React from "react";
import HeroSection from "../AIModels/HeroSection.jsx";
import ModelsSection from "../AIModels/ModelsSection";
import InteractiveForm from "../AIModels/InteractiveForm";
import FutureModels from "../AIModels/FutureModels";

const AIModelsPage = () => {
  return (
    <div>
      <HeroSection />
      <ModelsSection />
      <InteractiveForm />
      <FutureModels />
    </div>
  );
};

export default AIModelsPage;
