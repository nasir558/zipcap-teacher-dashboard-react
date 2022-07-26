import React, { useState } from "react";
import { Input } from "usetheform";
import PlusIcon from "../../../assets/images/plus.png";
import DeleteIcon from '../../../assets/images/delete-icon-red.png';

const MCQs = ({ btnOneText, btnTwoText }) => {
  const [formValues, setFormValues] = useState([{ choice: "", correctOption: true }])

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }

  let addFormFields = () => {
    setFormValues([...formValues, { choice: "", correctOption: false }])
  }

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-5">
        <label className="text-sm greyText">
          <span>
            Question No.
          </span>
          <div className="mt-3">
            <Input
              type="text"
              name="question-no"
              placeholder=""
              disabled
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
            />
          </div>
        </label>
        <label className="text-sm greyText lg:col-span-2">
          <span>
            Question <span className="redText">*</span>
          </span>
          <div className="mt-3">
            <Input
              type="text"
              name="question"
              placeholder=""
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
            />
          </div>
        </label>
      </div>
      <div className="mt-4">
        <label className="text-sm greyText">
          <span>
            Add choices <span className="redText">*</span>
          </span>
        </label>
      </div>
      {formValues.map((element, index) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 mt-4 items-center" key={index}>
          <label className="text-sm greyText">
            <span>
              Choice A <span className="redText">*</span>
            </span>
            <div className="mt-3">
              <Input
                type="text"
                name="choice-a"
                placeholder=""
                value={element.choice || ""} onChange={e => handleChange(index, e)}
                className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
              />
            </div>
          </label>
          <div>
            <div className="flex items-center space-x-12">
              <label className="customRadio flex flex-row mt-7">
                <input type="radio" name="choice" value={element.correctOption || ""} onChange={e => handleChange(index, e)} />
                <i className="flex-shrink-0"></i>

                <p className="text-sm leading-6">
                  <span className="block w-full">Mark this as correct option.</span>
                </p>
              </label>
              {
                index ?
                  <button type="button" onClick={() => removeFormFields(index)} className="w-18px overflow-hidden mt-7">
                    <img src={DeleteIcon} className="w-full h-auto" alt="" />
                  </button>
                  : null
              }

            </div>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 mt-4 justify-end formBtns text-right">
          <div>
            <button
              type="button"
              onClick={() => addFormFields()}
              className="red2Bg shadow-md rounded-lg text-white hover:bg-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
            >
              Add Choices{" "}
              <img
                src={PlusIcon}
                className="w-4 h-4 inline-block ml-2.5 -mt-1"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mt-4">
        <label className="text-sm greyText">
          <span>
            Question Marks. <span className="redText">*</span>
          </span>
          <div className="mt-3">
            <Input
              type="text"
              name="question-marks"
              placeholder="ABC"
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
            />
          </div>
          <p className="text-sm redText mt-1">Invalid values, only numbers are allowed</p>
        </label>
      </div>

      <div className="mt-16">
        <div className="flex flex-col space-y-6 justify-end formBtns items-end">
          <div>
            <button
              type="button"
              className="red2Bg minWidth-155px rounded-lg shadow-md text-white hover:bg-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
            >
              {btnOneText}{" "}
              <img
                src={PlusIcon}
                className="w-4 h-4 inline-block ml-2.5 -mt-1"
                alt=""
              />
            </button>
          </div>
          <div>
            <button
              type="button"
              className="red2Bg minWidth-205px rounded-lg shadow-md text-white hover:bg-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
            >
              {btnTwoText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCQs;
