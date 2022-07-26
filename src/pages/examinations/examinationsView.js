import React from "react";
import FilterForm from "./filterForm";
import ExaminationsData from "./dataTable";

const ExaminationsView = () => {

    const dataExaminations = [
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Pending",
            id: "2324",
            title1: "Midterm Examination",
            title2: "Getting started with Photoshop"

        },
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Pending",
            id: "2324",
            title1: "Midterm Examination",
            title2: "Getting started with Photoshop"

        },
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Done",
            id: "2324",
            title1: "Midterm Examination",
            title2: "Getting started with Photoshop"

        },
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Pending",
            id: "2324",
            title1: "Midterm Examination",
            title2: "Getting started with Photoshop"

        },
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Done",
            id: "2324",
            title1: "Midterm Examination",
            title2: "Getting started with Photoshop"

        }
    ]

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
        <div>

            <FilterForm 
                courseData = {dataFormSelectCourse}
                examData = {dataFormSelectExam}
                inputPlaceHolder = "Search by student name"
            />
            <ExaminationsData
                data={dataExaminations}
            />

        </div>
    );
};

export default ExaminationsView;
