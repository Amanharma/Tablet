import React from "react";

const Main1 = () => {
  return (
    <div>
      <main className="mainbackground">
        <div className="hero">
          <div
            id="myCarousel"
            class="carousel slide mb-6"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                class=""
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                class="active"
                aria-current="true"
              ></button>
              <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                class=""
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item">
                <img
                  class="bd-placeholder-img"
                  src="/Resources/Images/Image1copy.jpg "
                  width="100%"
                  height="100%"
                />
                <div class="container">
                  <div class="carousel-caption text-start">
                    <h1>Disease detetion through AI.</h1>
                    <p class="opacity-75">
                      Connect with us to be the best version of you!
                    </p>
                    <p>
                      <a class="btn btn-lg btn-primary" href="signup">
                        Sign up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item active">
                <img
                  class="bd-placeholder-img"
                  src="/Resources/Images/Image3copy.jpg"
                  width="100%"
                  height="100%"
                />
                <div class="container">
                  <div class="carousel-caption">
                    <h1>Predict Your diseases with us</h1>
                    <p>We predict a lot of varities of diseases!</p>
                    <p>
                      <a class="btn btn-lg btn-primary" href="Aboutus">
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  class="bd-placeholder-img"
                  src="/Resources/Images/Image2copy.jpg"
                  width="100%"
                  height="100%"
                />
                <div class="container">
                  <div class="carousel-caption text-end">
                    <h1>Protect your health with us!</h1>
                    <p>We offer more than 5 disease predictors!</p>
                    <p>
                      <a class="btn btn-lg btn-primary" href="Gallery">
                        Browse gallery
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <img
                class="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                src="/Resources/Images/Image3.webp"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
              <title>Placeholder</title>

              <h2 class="fw-normal">Diabeties Predictor!</h2>
              <p>
                Our AI-powered diabetes prediction tool helps assess the
                likelihood of diabetes based on key health metrics. Simply enter
                your details, and our model will analyze the data to provide a
                risk estimate.
              </p>
              <p>
                <a class="btn btn-secondary" href="/diseases/diabities">
                  Predict Now »
                </a>
              </p>
            </div>
            <div class="col-lg-4">
              <img
                class="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                src="/Resources/Images/Image2.webp"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
              <h2 class="fw-normal">Autism Predictor</h2>
              <p>
                This AI-powered tool helps assess the likelihood of Autism based
                on your health parameters. Enter your details, and our model
                will analyze your risk factors to provide an estimate.
              </p>
              <p>
                <a class="btn btn-secondary" href="/diseases/Parkinson">
                  Predict Now »
                </a>
              </p>
            </div>
            <div class="col-lg-4">
              <img
                class="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                src="/Resources/Images/Image1.webp"
                aria-label="Placeholder"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
              <h2 class="fw-normal">Breast Cancer</h2>
              <p>
                Our AI-powered Breast Cancer Prediction Tool helps assess the
                likelihood of developing breast cancer based on key health
                parameters. Simply enter your details, and our model will
                analyze the data to provide an estimate of your risk level.
              </p>
              <p>
                <a class="btn btn-secondary" href="diseases/Breastcancer">
                  Predict Now»
                </a>
              </p>
            </div>
          </div>

          <hr class="featurette-divider" />

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">
                Your Health, Our Technology – Predict Risks with AI
              </h2>
              <p class="lead">
                In today's fast-paced world, early detection is key to better
                health outcomes. Our AI-powered health prediction tool analyzes
                vital health data to assess potential risks for conditions like
                diabetes, asthma, and breast cancer. By leveraging advanced
                machine learning models, we provide quick and reliable insights
                to help you make informed decisions about your well-being.
              </p>
            </div>
            <div class="col-md-5">
              <img
                src="/Resources/Images/Image3.webp"
                class="featurette-image img-fluid mx-auto"
                width="500px"
                height="500px"
                alt="Disease detection AI"
              />
            </div>
          </div>

          <hr class="featurette-divider" />
          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">
                Early Detection, Better Prevention – Get Instant Health Insights
              </h2>
              <p class="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <img
                src="/Resources/Images/Image2.webp"
                class="featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                alt="Disease detection AI"
              />
            </div>
          </div>

          <hr class="featurette-divider" />
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading fw-normal lh-1">
                AI-Powered Disease Prediction – Fast, Reliable, and Easy to Use
              </h2>
              <p class="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div class="col-md-5">
              <img
                src="/Resources/Images/Image1.webp"
                class="featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                alt="Disease detection AI"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main1;
