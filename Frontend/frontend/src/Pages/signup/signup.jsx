import React from "react";
import Nav from "../Home/Nav";

const signup = () => {
  return (
    <div>
      <Nav />
      <div class="container signup">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card shadow-lg p-4">
              <h2 class="text-center mb-4">Sign Up</h2>
              <form>
                <div class="mb-3">
                  <label for="username" class="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary w-100">
                  Sign Up
                </button>
              </form>
              <p class="text-center mt-3">
                Already have an account? <a href="login">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
