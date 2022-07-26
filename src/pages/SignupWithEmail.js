import React, { useState, useRef } from "react";
import { useHistory } from 'react-router-dom';
import EyeIcon from "../assets/images/eye.png";
import EyeSlash from "../assets/images/hide.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Autocomplete from "react-google-autocomplete";
import { Link } from "react-router-dom";
import api from "../Api";
import Logo from "../assets/images/zipcap-logo.svg";

const SignupWithEmail = () => {
  const [nextPage, setNextPage] = useState(false);

  const history = useHistory();

  const [showPassword, setshowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitDisable, setSubmitDisable] = useState(true);
  const [msg, setMsg] = useState('');

  const [startDate, setStartDate] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [gender, setGender] = useState(null);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [errors, setErrors] = useState([]);

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

  const getCityCountry = place => {
    let city = place.address_components.filter(address => address.types.includes('locality'))[0].long_name;
    let country = place.address_components.filter(address => address.types.includes('country'))[0].long_name;
    setCity(city);
    setCountry(country);
  }

  const geRegister = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await api.post('registration', {
        name: name,
        email: email,
        password: pass,
        password_confirmation: passConfirm,
        gender: gender,
        date_of_birth: startDate,
        city: city,
        country: country,
        usertype: 'student'
      })
      setLoading(false);
      history.push('/account-verification', { _zu: data.token })

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
  }

  return (

    <div className="flex flex-col md:flex-row  h-screen justify-center items-center">
      <div className="bg-pink loginBg w-1/2 h-screen hidden md:inline-flex">

      </div>
      <div className="bg-white w-full formSection md:w-1/2 h-screen overflow-y-auto">
        <div className="flex py-12">
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
                for instructor</p>  </div>
            <div className="signup forgotPassword mt-70px">
              <div className="form-login emailSignUpForm">
                <h4 className="text-green-600 text-center">{msg}</h4>
                <form onSubmit={geRegister}>

                  {!nextPage ? (
                    <>
                      <div className="form-group">
                        <input
                          type="text"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          className="name block w-full transition-all duration-300"
                          placeholder="Organization name"
                        />
                        {
                          errors?.name ?
                            <label className="text-red-400">* {errors.name}</label>
                            :
                            null
                        }
                      </div>
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
                          placeholder="Confirm password"
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
                          type="button"
                          onClick={e => setNextPage(!nextPage)}
                          className="c-btn addCartBtn transition-all duration-300"

                        >
                          Next
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="form-group">
                        <select
                          value={gender}
                          onChange={e => setGender(e.target.value)}
                          className={`gender block w-full ${gender === null ? ("grey") : ("text-black")}`}
                        >
                          <option className="placeHolder hidden" selected>
                            Gender
                          </option>
                          <option value="male" className="others">
                            Male
                          </option>
                          <option value="female" className="others">
                            Female
                          </option>
                        </select>
                        {
                          errors?.gender ?
                            <label className="text-red-400">* {errors.gender}</label>
                            :
                            null
                        }
                      </div>
                      <div className="form-group">
                        <DatePicker
                          placeholderText="Date of birth"
                          className="dob block w-full transition-all duration-300"
                          peekNextMonth
                          showMonthDropdown
                          showYearDropdown
                          dropdownMode="select"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                        {
                          errors?.date_of_birth ?
                            <label className="text-red-400">* {errors.date_of_birth}</label>
                            :
                            null
                        }
                      </div>
                      <div className="form-group locationPicker">
                        <Autocomplete
                          apiKey={"AIzaSyA16v2Y-D_uSN4eAOp_NhtNdSeT4eOIleI"}
                          style={{ width: "100%" }}
                          onPlaceSelected={place => getCityCountry(place)}
                        />
                        {
                          errors?.city ?
                            <label className="text-red-400">* {errors.submit}</label>
                            :
                            null
                        }
                      </div>
                      <div className="form-group text-center sm:text-left terms">
                        <label className="saveforLater" htmlFor="save">
                          <input
                            type="checkbox"
                            className="css-radio"
                            id="save"
                            onChange={e => setSubmitDisable(!submitDisable)}
                          />
                          <i></i>
                          <span className="cardNumber inline-block">
                            I agree to the&nbsp;
                          </span>
                        </label>
                        <Link
                          to=""
                          className="underline transition-all duration-300"
                        >
                          Terms of Service
                        </Link>{" "}
                        and&nbsp;
                        <Link
                          to=""
                          className="underline transition-all duration-300"
                        >
                          Privacy Policy
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
                          type="submit"
                          className={submitDisable ? 'c-btn addCartBtn transition-all duration-300 opacity-50 cursor-not-allowed' : 'c-btn addCartBtn transition-all duration-300'}
                          disabled={submitDisable}
                        >
                          Sign up
                        </button>
                      </div>
                    </>
                  )}

                </form>
                <div className="text-center block loginText">
                  Already have an account?{" "}
                  <Link
                    to="/"
                    className="loginLInk underline transition-all duration-300 cursor-pointer"
                  >
                    SIGN IN
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

export default SignupWithEmail;
