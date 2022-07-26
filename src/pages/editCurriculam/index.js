import React from "react";
import Header from "../Layout/header";
import EditForm from "./editForm";

function Index() {

    return (
        <div>
            <Header />
            <div className="block w-full p-2 lg:p-4 xl:p-14 mt-20 xl:mt-0">
                <div className="createNewCourse">
                    <h3 className="titleDashboard mb-28px text-lg font-semibold mt-5">
                        Edit curriculum
                    </h3>
                    <div className="Courses mainBoxShadow rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
                       <EditForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
