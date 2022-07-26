import React from "react";
import Header from "../Layout/header";
import LeftArrow from "../../assets/images/left-arrow.png";
import { Link } from "react-router-dom";
import CurriculamData from "./curriculamData";

function Index() {

    return (
        <div>
            <Header />
            <div className="block w-full p-2 lg:p-4 xl:p-14 mt-20 xl:mt-0">
                <div className="createNewCourse">
                    <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                        <Link
                            to="/all-courses"
                            title=""
                            className="red2Bg shadow-md text-white hover:bg-black text-base font-semibold capitalize px-6 py-3.5 rounded-lg transition-all duration-300"
                        >
                            <span className="flex flex-row items-center space-x-2">
                                <img src={LeftArrow} alt="" />
                                <span>All Courses</span>
                            </span>
                        </Link>
                    </div>
                    <h3 className="titleDashboard mb-28px text-lg font-semibold mt-5">
                        Manage curriculums
                    </h3>
                    <div>
                        <CurriculamData />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
