import React from "react";

const Notification = () => {
  return (
    <div className="Form notifications">
      <h4 className="mb-5">Notifications</h4>
      <form>
        <div className="flex flex-col space-y-8">
          <div className="form-checkbox">
            <label className="flex flex-row items-start">
              <input
                type="checkbox"
                className="css-checkbox"
                id="all"
                name="all"
                checked
              />
              <i className="flex-shrink-0 mt-2px"></i>
              <p className="text-base leading-6 pl-20px">
                <span className="block w-full font-semibold">
                  Updates from Classes You're Taking
                </span>
                <span className="block w-block text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been. printing and
                  typesetting industry. Lorem Ipsum has been.
                </span>
              </p>
            </label>
          </div>
          <div className="form-checkbox">
            <label className="flex flex-row items-start">
              <input
                type="checkbox"
                className="css-checkbox"
                id="all"
                name="all"
                checked
              />
              <i className="flex-shrink-0 mt-2px"></i>
              <p className="text-base leading-6 pl-20px">
                <span className="block w-full font-semibold">
                  Updates from Instructors
                </span>
                <span className="block w-block text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been. printing and
                  typesetting industry. Lorem Ipsum has been.
                </span>
              </p>
            </label>
          </div>
          <div className="form-checkbox">
            <label className="flex flex-row items-start">
              <input
                type="checkbox"
                className="css-checkbox"
                id="all"
                name="all"
              />
              <i className="flex-shrink-0 mt-2px"></i>
              <p className="text-base leading-6 pl-20px">
                <span className="block w-full font-semibold">
                  Updates from Tasks you have in your course
                </span>
                <span className="block w-block text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been. printing and
                  typesetting industry. Lorem Ipsum has been.
                </span>
              </p>
            </label>
          </div>
          <div className="form-checkbox">
            <label className="flex flex-row items-start">
              <input
                type="checkbox"
                className="css-checkbox"
                id="all"
                name="all"
              />
              <i className="flex-shrink-0 mt-2px"></i>
              <p className="text-base leading-6 pl-20px">
                <span className="block w-full font-semibold">
                  Updates about your task's deadlines
                </span>
                <span className="block w-block text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been. printing and
                  typesetting industry. Lorem Ipsum has been.
                </span>
              </p>
            </label>
          </div>
          <div className="form-checkbox">
            <label className="flex flex-row items-start">
              <input
                type="checkbox"
                className="css-checkbox"
                id="all"
                name="all"
              />
              <i className="flex-shrink-0 mt-2px"></i>
              <p className="text-base leading-6 pl-20px">
                <span className="block w-full font-semibold">
                  Updates about your task's deadlines
                </span>
                <span className="block w-block text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been. printing and
                  typesetting industry. Lorem Ipsum has been.
                </span>
              </p>
            </label>
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
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Notification;
