import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import EyeIcon from '../assets/images/eye.png';
import EyeSlash from '../assets/images/hide.png';
import Logo from "../assets/images/zipcap-logo.svg";

const SaveNewPassword = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');

  const password = useRef();
  const confirmPasswordShow = useRef();

  const changetypePassword = () => {

    setshowPassword(!showPassword);
    password.current.type = showPassword ? "password" : "text";

  };

  const changetypeConfirmPassword = () => {

    setConfirmPassword(!confirmPassword);
    confirmPasswordShow.current.type = confirmPassword ? "password" : "text";

  };

  return (
    <>
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
                <p className="blackText font-medium text-center text-2xl mt-33px">Please update your
                  Password</p>  </div>
              <div className="signup forgotPassword mt-70px">
                <div className="form-login emailSignUpForm">
                  <form>
                    <div className="form-group">
                      <input
                        type="password"
                        value={pass}
                        onChange={e => setPass(e.target.value)}
                        className="passowrd block w-full transition-all duration-300"
                        placeholder="New Password"
                        ref={password}
                      />
                      <button
                        type="button"
                        onClick={changetypePassword}
                        className="passShowHideBtn absolute showPass"
                      >
                        <img
                          src={showPassword ? EyeSlash : EyeIcon}
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        value={passConfirm}
                        onChange={e => setPassConfirm(e.target.value)}
                        className="passowrd block w-full transition-all duration-300"
                        placeholder="Confirm new password"
                        ref={confirmPasswordShow}
                      />
                      <button
                        type="button"
                        onClick={changetypeConfirmPassword}
                        className="passShowHideBtn absolute showPass"
                      >
                        <img
                          src={confirmPassword ? EyeSlash : EyeIcon}
                          alt=""
                        />
                      </button>

                    </div>
                    <div className="form-group text-center">
                      <button
                        type="submit"
                        className="c-btn addCartBtn transition-all duration-300"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                  <div className="text-center block loginText">
                    <Link
                      to="/signup"
                      className="loginLInk underline transition-all duration-300 cursor-pointer"
                    >
                      SIGN UP
                    </Link>{" "}
                    instead
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SaveNewPassword;
