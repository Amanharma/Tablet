import React from "react";

const AboutusSection2 = () => {
  return (
    <div className="mainbackground">
      <div class="container row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        <div class="col d-flex flex-column align-items-start gap-2">
          <h2 class="fw-bold ">
            Left-aligned title explaining these awesome features
          </h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <a href="login" class="btn btn-primary btn-lg">
            Primary button
          </a>
        </div>

        <div class="col">
          <div class="row row-cols-1 row-cols-sm-2 g-4">
            <div class="col d-flex flex-column gap-2">
              <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
              <h4 class="fw-semibold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>

            <div class="col d-flex flex-column gap-2">
              <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
              <h4 class="fw-semibold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>

            <div class="col d-flex flex-column gap-2">
              <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
              <h4 class="fw-semibold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>

            <div class="col d-flex flex-column gap-2">
              <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3"></div>
              <h4 class="fw-semibold mb-0">Featured title</h4>
              <p>
                Paragraph of text beneath the heading to explain the heading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusSection2;
