import React from "react";

const Cards = () => {
  return (
    <div className="Form">
      <h4 className="mb-5">Please double check you bank account details</h4>
      <form>
        <div className="flex flex-col space-y-8">
          <div className="block max-w-471px">
            <label
              htmlFor="country"
              className="block w-full mb-13px text-sm font-medium leading-6"
            >
              Country <span className="redText">*</span>
            </label>
            <select
              id="country"
              name=""
              className="block w-full px-24px transition-all duration-300"
            >
              <option className="placeHolder hidden" selected disabled>
                Select Country
              </option>
              <option value="male">Pakistan</option>
              <option value="female">India</option>
            </select>
          </div>
          <div className="block max-w-471px">
            <label
              htmlFor="bank"
              className="block w-full mb-13px text-sm font-medium leading-6"
            >
              Bank <span className="redText">*</span>
            </label>
            <select
              id="bank"
              name=""
              className="block w-full px-24px transition-all duration-300"
            >
              <option className="placeHolder hidden" selected disabled>
                Select Bank
              </option>
              <option value="male">HBL</option>
              <option value="female">MCB</option>
            </select>
          </div>
          <div className="block max-w-471px">
            <label
              htmlFor="account-title"
              className="block w-full mb-13px text-sm font-medium leading-6"
            >
              Account Title <span className="redText">*</span>
            </label>
            <input
              type="text"
              name=""
              id="account-title"
              className="block w-full px-24px transition-all duration-300"
            />
          </div>
          <div className="block max-w-471px">
            <label
              htmlFor="account-number"
              className="block w-full mb-13px text-sm font-medium leading-6"
            >
              Account Number/IBAN <span className="redText">*</span>
            </label>
            <input
              type="text"
              name=""
              id="account-number"
              className="block w-full px-24px transition-all duration-300"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mt-4">
            <div>
              <label className="text-sm greyText">
                <span>
                  Class library <span className="redText">*</span> (pdf, doc,
                  jpeg, png)
                </span>
                <input type="file" name="class-library" className="hidden" />
                <div className="flex flex-row items-center uploadFile">
                  <span className="uploadFileText inline-block">
                    Upload File
                  </span>
                  <span className="icon"></span>
                </div>
              </label>
              <p className="text-sm greyText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-end formBtns mt-24">
              <button
                type="reset"
                className="redBorder shadow-md redText hover:bg-black hover:text-white hover:border-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="red2Bg shadow-md text-white hover:bg-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cards;
