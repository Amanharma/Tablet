import React from "react";

const AboutusSection = () => {
  return (
    <div>
      <section class="container my-5">
        <div class="row align-items-center">
          <div class="col-lg-6 text-center">
            <img
              src="https://via.placeholder.com/500x300"
              alt="About Us Image"
              class="img-fluid rounded"
            />
          </div>

          <div class="col-lg-6 text-center text-lg-start">
            <h2 class="fw-bold">Why Choose Us?</h2>
            <p class="text-muted">
              We offer unparalleled quality and exceptional service tailored to
              meet your needs. Our team is committed to delivering excellence,
              ensuring customer satisfaction at every step.
            </p>
            <a href="#" class="btn btn-success mt-3">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutusSection;
