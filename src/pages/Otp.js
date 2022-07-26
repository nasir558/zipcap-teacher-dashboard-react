import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/zipcap-logo.svg";

function Otp() {
  const [OTP, setOTP] = useState("");
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
              <p className="blackText font-medium text-center text-2xl mt-33px">Please check your email for
                four digits code </p>
              <p className="textGrey text-base mt-25px text-center">Enter the 4 digits code you received on
                your email.</p>
            </div>
            <div className="signup otp mt-70px">
              <div className="form-login emailSignUpForm">
                <div className="form-login emailSignUpForm">
                  <form>
                    <div className="form-group">
                      <input
                        value={OTP}
                        onChange={e => setOTP(e.target.value)}
                        className="block w-full transition-all duration-300"
                        placeholder=""
                      />
                    </div>
                    <div className="form-group text-center">
                      <button
                        type="submit"
                        className="c-btn addCartBtn transition-all duration-300"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                  <div className="text-center block loginText">
                    Did't get the code?{" "}
                    <Link
                      to=""
                      className="loginLInk underline transition-all duration-300 cursor-pointer"
                    >
                      Resend
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
