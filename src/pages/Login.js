import React, { useState, useRef, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import EyeIcon from "../assets/images/eye.png";
import EyeSlash from "../assets/images/hide.png";
import { Link } from "react-router-dom";
import api from "../Api";
import Logo from "../assets/images/zipcap-logo.svg";

const Login = () => {
  const [cookies, setCookie] = useCookies(['cred']);
  const history = useHistory();

  const [show, setshow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [msg, setMsg] = useState('');
  const [errors, setErrors] = useState(null);


  const password = useRef();

  const changetype = () => {

    setshow(!show);

    password.current.type = show ? "password" : "text";

  };

  useEffect(() => {
    if (cookies.cred) {
      return history.push('/dashboard');
    }
    if (history?.location?.state?.msg) {
      setMsg(history?.location?.state?.msg)
    }

  }, []);

  const getLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await api.post('login', {
        email: email,
        password: pass
      });
      setCookie('cred', data);
      setLoading(false);
      history.push('/dashboard');
    } catch (err) {
      setLoading(false);
      let merge;
      if (err.response.status === 422) {
        let keys = Object.keys(err.response.data.errors)
        let values = Object.values(err.response.data.errors)
        merge = values.reduce((result, field, index) => {
          result[keys[index]] = field[0];
          return result;
        }, {});
        setErrors(merge);
      } else {
        setErrors(merge);
      }
    }
  };
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
              <p className="blackText font-medium text-center text-2xl mt-33px">Welcome to Zipcap
                for instructor </p>
            </div>
            <div className="signup mt-70px">
              <div className="form-login emailSignUpForm">
                <form onSubmit={getLogin}>
                  <div className="form-group">
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="email block w-full transition-all duration-300"
                      placeholder="Email"
                    />
                    {
                      errors?.email ?
                        <label className="text-red-400">* {errors.email}</label>
                        :
                        null
                    }
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      value={pass}
                      onChange={e => setPass(e.target.value)}
                      className="passowrd block w-full transition-all duration-300"
                      placeholder="Password"
                      ref={password}
                    />
                    {
                      errors?.password ?
                        <label className="text-red-400">* {errors.password}</label>
                        :
                        null
                    }
                    <button
                      type="button"
                      onClick={changetype}
                      className="passShowHideBtn absolute showPass"
                    >
                      <img
                        src={show ? EyeSlash : EyeIcon}
                        alt=""
                      />
                    </button>
                  </div>
                  <div className="form-group text-right f-pass">
                    <Link
                      to="/forgot-password"
                      className="formLink text-base underline transition-all duration-300"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="form-group text-center">
                    {
                      loading ?
                        <div className="sk-chase">
                          <div className="sk-chase-dot"></div>
                          <div className="sk-chase-dot"></div>
                          <div className="sk-chase-dot"></div>
                          <div className="sk-chase-dot"></div>
                          <div className="sk-chase-dot"></div>
                          <div className="sk-chase-dot"></div>
                        </div>
                        :
                        null
                    }
                    <button
                      type="button"
                      className="c-btn addCartBtn transition-all duration-300"
                    >
                      sign in
                    </button>
                  </div>
                </form>
                <div className="text-center block loginText">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="loginLInk underline transition-all duration-300 cursor-pointer"
                  >
                    SIGN UP
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  );
}

export default Login;
