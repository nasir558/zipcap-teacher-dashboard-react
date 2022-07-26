import React from "react";
import FilterForm from "./filterForm";
import QuizData from "./dataTable";

const QuizzesView = () => {

    const dataQuizes = [
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Pending",
            id: "2324",
            title1: "Quiz",
            title2: "Quiz No. 01"

        },
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Pending",
            id: "2324",
            title1: "Quiz",
            title2: "Quiz No. 02"

        },
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Done",
            id: "2324",
            title1: "Quiz",
            title2: "Quiz No. 03"

        },
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Pending",
            id: "2324",
            title1: "Quiz",
            title2: "Quiz No. 04"

        },
        {
            name: "01: John M David",
            questionCount: "3",
            markingStatus: "Done",
            id: "2324",
            title1: "Quiz",
            title2: "Quiz No. 05"

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
            label: "Select Quiz NUmber"
        },
        {
            value: "quiz-one",
            label: "Quiz One"
        },
        {
            value: "quiz-two",
            label: "Quiz Two"
        }
    ]

    return (
        <div>

            <FilterForm 
                courseData = {dataFormSelectCourse}
                examData = {dataFormSelectExam}
                inputPlaceHolder = "Search by student name"
            />
            <QuizData
                data={dataQuizes}
            />

        </div>
    );
};

export default QuizzesView;
