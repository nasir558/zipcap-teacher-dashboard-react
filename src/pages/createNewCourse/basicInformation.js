import React, { useState } from "react";
import { Form, Input, Select, TextArea } from "usetheform";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BasicInformation(props) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Form name="page1" {...props}>
      <h4 className="text-base font-medium capitalize formWizardTitlt">
        Basic Information
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-5">
        <label className="text-sm greyText">
          <span>
            Course code <span className="redText">*</span>
          </span>
          <div className="mt-3">
            <Input
              type="text"
              name="course-code"
              placeholder=""
              autoFocus={true}
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
            />
          </div>
        </label>
        <label className="text-sm greyText lg:col-span-2">
          <span>
            Course Title <span className="redText">*</span>
          </span>
          <div className="mt-3">
            <Input
              type="text"
              name="course-title"
              placeholder=""
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
            />
          </div>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mt-4">
        <label className="text-sm greyText">
          <span>
            Field <span className="redText">*</span>
          </span>
          <div className="mt-3">
            <Select
              name="field"
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
            >
              <option value="">Computer & Engineering</option>
              <option value="">Information Technology</option>
            </Select>
          </div>
        </label>
        <label className="text-sm greyText">
          <span>
            Department <span className="redText">*</span>
          </span>
          <div className="mt-3">
            <Select
              name="department"
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
            >
              <option value="">CS & IT</option>
              <option value="">Civil</option>
            </Select>
          </div>
        </label>
        <label className="text-sm greyText">
          <span>
            Grade/Level <span className="redText">*</span>
          </span>
          <div className="mt-3">
            <Select
              name="grade"
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
            >
              <option value="">Under Graduate</option>
              <option value="">Post Graduate</option>
            </Select>
          </div>
        </label>
      </div>
      <div className="mt-4">
        <label className="text-sm greyText">
          <span>
            Course description <span className="redText">*</span>
          </span>
          <div className="mt-3">
            <SunEditor
              lang="en"
              name="course-description"
              width="100%"
              height="281px"
              placeholder="Please type here..."
              className="rounded-md bg-white px-4 block w-full outline-none transition-all duration-300"
              setDefaultStyle="font-family: 'Poppins', sans-serif !important; font-size: 16px;"
              
            />
          </div>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 lg:gap-12 mt-4">
        <label className="text-sm greyText">
          <span>
            Prerequisite
          </span>
          <div className="mt-3">
            <TextArea
              type="text"
              name="Pre-requisite"
              placeholder=""
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
            >
            </TextArea>
          </div>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mt-4">
        <label className="text-sm greyText">
          <span>
            Language <span className="redText">*</span>
          </span>
          <div className="mt-3">
            <Select
              name="language"
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
            >
              <option value="">English</option>
              <option value="">French</option>
            </Select>
          </div>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mt-4">
        <label className="text-sm greyText">
          <span>
            Start Date <span className="redText">*</span>
          </span>
          <div className="mt-3">
            <DatePicker
              name="start-date"
              placeholderText="Date of birth"
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="d MMM, yyyy"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </div>
        </label>
        <label className="text-sm greyText">
          <span>
            End Date <span className="redText">*</span>
          </span>
          <div className="mt-3">
            <DatePicker
              name="end-date"
              placeholderText="Date of birth"
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="d MMM, yyyy"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </div>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mt-4">
        <label className="text-sm greyText">
          <span>
            Course Cover <span className="redText">*</span>
          </span>
          <input type="file" name="cousre-cover" className="hidden" />
          <div className="flex flex-row items-center uploadFile">
            <span className="uploadFileText inline-block">
              Click to upload course cover
            </span>
            <span className="icon"></span>
          </div>
        </label>
      </div>
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-24 mt-4 items-center">
        <div>
          <label className="customRadio flex flex-row">
            <input type="radio" name="choice" />
            <i className="flex-shrink-0"></i>

            <p className="text-sm leading-7">
              <span className="block w-full">Public</span>
            </p>
          </label>
        </div>
        <div>
          <label className="customRadio flex flex-row">
            <input type="radio" name="choice" />
            <i className="flex-shrink-0"></i>

            <p className="text-sm leading-7">
              <span className="block w-full">Restricted</span>
            </p>
          </label>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-end formBtns mt-24">
          <button
            type="reset"
            className="redBorder rounded-lg shadow-md redText hover:bg-black hover:text-white hover:border-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="red2Bg rounded-lg shadow-md text-white hover:bg-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
          >
            Save & Continue
          </button>
        </div>
      </div>
      {/* <Input type="text" name="name" placeholder="Type your name..." />
      <Input type="text" name="lastname" placeholder="Type your last name..." />
      <button type="submit">Next Page</button> */}
    </Form>
  );
}
