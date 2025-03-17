import React from "react";

const DiabitiesHero = () => {
  return (
    <div>
      <div class="row flex-lg-row-reverse align-items-center">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src="/Resources/Images/Image10.jpg"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Predict your diabities with us
          </h1>
          <p class="lead">
            Early detection of diabetes plays a crucial role in preventing
            long-term health complications. Our AI-powered Diabetes Prediction
            Tool helps assess the likelihood of diabetes based on your health
            parameters such as age, BMI, glucose levels, blood pressure, and
            more.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              class="btn btn-primary btn-lg px-4 me-md-2"
              fdprocessedid="8ovhpl"
            >
              Primary
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary btn-lg px-4"
              fdprocessedid="4w2oki"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiabitiesHero;
