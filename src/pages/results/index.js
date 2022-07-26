import React from "react";
import Layout from "../Layout/Layout";
import FilterForm from "../examinations/filterForm";
import ResultsData from "./resultData";

function Index() {
    const dataFormSelectCourse = [
        {
            value: "",
            label: "Select Course"
        },
        {
            value: "course-one",
            label: "Course One"
        },
        {
            value: "course-two",
            label: "Course Two"
        }
    ]
    const dataFormSelectExam = [
        {
            value: "",
            label: "Select Exam"
        },
        {
            value: "exam-one",
            label: "Exam One"
        },
        {
            value: "exam-two",
            label: "Exam Two"
        }
    ]

    return (
        <Layout>
            <div className="examinations">
                <h3 className="titleDashboard mb-28px text-lg font-semibold">
                    Results
                </h3>
                <div>
                    <FilterForm
                        courseData={dataFormSelectCourse}
                        examData={dataFormSelectExam}
                        inputPlaceHolder = "Search by name"
                    />
                    <ResultsData />
                </div>
            </div>
        </Layout>
    );
}

export default Index;
