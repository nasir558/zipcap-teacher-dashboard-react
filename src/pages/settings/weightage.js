import React from "react";

const Weightage = () => {
    return (
        <div className="Form">
            <h4 className="mb-5">Weightage configuration</h4>
            <div>
                <p className="text-sm leading-6 font-normal block max-w-471px">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                </p>
            </div>
            <form>
                <div className="flex flex-col space-y-8 mt-5">
                    <div className="block max-w-471px">
                        <label
                            htmlFor="quizzes"
                            className="block w-full mb-13px text-sm font-medium leading-6"
                        >
                            Quizzes
                        </label>
                        <input
                            type="text"
                            name=""
                            id="quizzes"
                            className="block w-full px-24px transition-all duration-300"
                        />
                    </div>
                    <div className="block max-w-471px">
                        <label
                            htmlFor="Assignments"
                            className="block w-full mb-13px text-sm font-medium leading-6"
                        >
                            Assignments
                        </label>
                        <input
                            type="text"
                            name=""
                            id="Assignments"
                            className="block w-full px-24px transition-all duration-300"
                        />
                    </div>
                    <div className="block max-w-471px">
                        <label
                            htmlFor="Examinations"
                            className="block w-full mb-13px text-sm font-medium leading-6"
                        >
                            Examinations
                        </label>
                        <input
                            type="text"
                            name=""
                            id="Examinations"
                            className="block w-full px-24px transition-all duration-300"
                        />
                        <span className="mt-1 redText text-sm block">Invalid values, only numbers are allowed</span>
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

export default Weightage;
