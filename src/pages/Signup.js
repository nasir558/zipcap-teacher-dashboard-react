import React from "react";
import FacebookIcon from "../assets/images/facebook-blue.png";
import GoogleIcon from "../assets/images/google.png";
import { Link } from "react-router-dom";
import Logo from "../assets/images/zipcap-logo.svg";

const Signup = () => {
  return (

    <div className="flex flex-col md:flex-row  h-screen justify-center items-center">
      <div className="bg-pink loginBg w-1/2 h-screen hidden md:inline-flex">

      </div>
      <div className="bg-white w-full formSection md:w-1/2 h-screen overflow-y-auto">
        <div className="flex items-center justify-center h-full">
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="align-middle mx-auto max-w-350px">
            <div className="loginHeader">
              <img src={Logo} alt="" className="w-92px h-auto flex-shrink-0 mx-auto" />
              <p className="blackText font-medium text-center text-2xl mt-33px">Get started with ZIPCAP </p>
              <p className="textGrey text-base mt-25px text-center">Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.</p>
            </div>
            <div className="signup mt-70px">
              <div className="signupBox">
                <div className="borderBottom">
                  <div className="max-w-350px mx-auto">
                    <p>
                      <Link
                        to="/signup-with-email"
                        className="formLink transition-all duration-300"
                      >
                        Sign Up with email
                      </Link>
                    </p>
                    <p>
                      Already have an account?&nbsp;
                      <Link
                        to="/"
                        className="formLink transition-all duration-300"
                      >
                        SIGN IN
                      </Link>
                    </p>
                    <div className="seperator">
                      <div>or</div>
                    </div>
                    <div className="signUpBtns">
                      <button
                        className="block w-full facebookBtn"
                        type="button"
                      >
                        <img
                          src={FacebookIcon}
                          className="float-left"
                          alt=""
                        />
                        Continue with Facebook
                      </button>
                     {/*  <button
                        className="block w-full googleBtn"
                        type="button"
                      >
                        <img
                          src={GoogleIcon}
                          className="float-left"
                          alt=""
                        />
                        Continue with Google
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <p className="termsCond">
                By signing up you agree to Zipcap's&nbsp;
                <Link to="" className="transition-all duration-300">
                  Terms of Service
                </Link>
                &nbsp;and&nbsp;
                <Link to="" className="transition-all duration-300">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
