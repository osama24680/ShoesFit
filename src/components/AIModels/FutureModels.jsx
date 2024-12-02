import React from "react";
import Spacing from "../Spacing/index.jsx";
import "./FutureModels.css";

const FutureModels = () => {
  return (
    <>
      <section className="future-models">
        <h2>More AI Models Coming Soon</h2>
        <p>
          Stay tuned for new AI models that will enhance health monitoring, such
          as heart disease prediction.
        </p>
        {/* <img src="/assets/images/future-ai.png" alt="Future AI Models" />  */}
      </section>
      <Spacing md="72" lg="50" />
    </>
  );
};

export default FutureModels;
