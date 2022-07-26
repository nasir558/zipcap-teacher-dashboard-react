import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { Link } from "react-router-dom";
import DeleteIcon from "../../../assets/images/dashboard/delete-red.svg";

const CreateLecture = () => {
  return (
    <div>
      <div className="mt-4">
        <label className="text-sm greyText">
          <span>
            Lecture Description <span className="redText">*</span>
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
              autoFocus={false}
            />
          </div>
        </label>
      </div>
      <h4 className="text-base font-medium capitalize formWizardTitlt mt-4">
        Upload unit resources
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mt-4">
        <div>
          <label className="text-sm greyText">
            <span>
              Unit resources <span className="redText">*</span> ( pdf, ppt, doc ,jpeg, png)
            </span>
            <input type="file" name="unit-resources" className="hidden" />
            <div className="flex flex-row items-center uploadFile">
              <span className="uploadFileText inline-block">
                Upload File
              </span>
              <span className="icon"></span>
            </div>
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-12">
        <div>
          <div className="flex flex-row space-x-4 items-center justify-between mt-4">
            <p className="flex-grow">
              <Link to="#" className="text-sm greyText underline hover:no-underline">
                Introduction to this lecture.ppt
              </Link>
            </p>
            <button type="button">
              <img src={DeleteIcon} alt="" className="flex-shrink-0 w-18px h-auto" />
            </button>
            <div>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center justify-between mt-4">
            <p className="flex-grow">
              <Link to="#" className="text-sm greyText underline hover:no-underline">
                Course outlines.doc
              </Link>
            </p>
            <button type="button">
              <img src={DeleteIcon} alt="" className="flex-shrink-0 w-18px h-auto" />
            </button>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateLecture;
