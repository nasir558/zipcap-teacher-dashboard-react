import React from "react";
import { Input, Select } from "usetheform";
import PlusIcon from "../../../assets/images/plus.png";

const DescriptiveQuestion = ({ btnOneText, btnTwoText }) => {
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

export default DescriptiveQuestion;
