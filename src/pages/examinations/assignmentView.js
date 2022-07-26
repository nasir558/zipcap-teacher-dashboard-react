import React from "react";
import FilterForm from "./filterForm";
import AssignmentData from "./dataTable";

const AssignmentView = () => {

    const dataAssignment = [
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Pending",
            id: "2324",
            title1: "Assignment",
            title2: "Assignment No. 01"

        },
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Pending",
            id: "2324",
            title1: "Assignment",
            title2: "Assignment No. 02"

        },
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Done",
            id: "2324",
            title1: "Assignment",
            title2: "Assignment No. 03"

        },
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Pending",
            id: "2324",
            title1: "Assignment",
            title2: "Assignment No. 04"

        },
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Done",
            id: "2324",
            title1: "Assignment",
            title2: "Assignment No. 05"

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
            label: "Select Assignment NUmber"
        },
        {
            value: "Assignment-one",
            label: "Assignment One"
        },
        {
            value: "Assignment-two",
            label: "Assignment Two"
        }
    ]

    return (
        <div>

            <FilterForm 
                courseData = {dataFormSelectCourse}
                examData = {dataFormSelectExam}
                inputPlaceHolder = "Search by student name"
            />
            <AssignmentData
                data={dataAssignment}
            />

        </div>
    );
};

export default AssignmentView;
