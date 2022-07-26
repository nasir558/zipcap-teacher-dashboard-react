import React from "react";

const Email = () => {
  return (
    <div className="Form">
      <h4 className="mb-5">Email</h4>
      <form>
        <div className="flex flex-col space-y-8">
          <div className="block max-w-471px">
            <label
              htmlFor="current-email"
              className="block w-full mb-13px text-sm font-medium leading-6"
            >
              Current Email
            </label>
            <input
              type="email"
              name=""
              id="current-email"
              disabled
              value="abc@example.com"
              className="block w-full px-24px transition-all duration-300"
            />
          </div>
          <div className="block max-w-471px">
            <label
              htmlFor="new-email"
              className="block w-full mb-13px text-sm font-medium leading-6"
            >
              New Email
            </label>
            <input
              type="email"
              name=""
              id="new-email"
              className="block w-full px-24px transition-all duration-300"
            />
          </div>
          <div className="block max-w-471px">
            <label
              htmlFor="confirm-email"
              className="block w-full mb-13px text-sm font-medium leading-6"
            >
              Confirm New Email
            </label>
            <input
              type="email"
              name=""
              id="confirm-email"
              className="block w-full px-24px transition-all duration-300"
            />
          </div>
          <div>
            <p className="text-sm leading-6 font-normal block max-w-471px">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
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

export default Email;
