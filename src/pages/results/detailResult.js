import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import Avator from "../../assets/images/avatar.png";
import LeftArrow from "../../assets/images/left-arrow.png";

const ResultsDetail = () => {

    const dataExaminations = [
        {
            name: "01. Learn IOS Development",
            marksObtained: "35",
            totalMarks: "50",
            status: "Pass"

        },
        {
            name: "02. Logo designing basics",
            marksObtained: "35",
            totalMarks: "50",
            status: "Pass"

        },
        {
            name: "03. Getting started with Photoshop",
            marksObtained: "15",
            totalMarks: "50",
            status: "Fail"

        },
        {
            name: "04. Master in PHP",
            marksObtained: "35",
            totalMarks: "50",
            status: "Pass"

        },
        {
            name: "05. React Native advance course",
            marksObtained: "5",
            totalMarks: "50",
            status: "Fail"

        }
    ]

    return (
        <Layout>
            <div className="examinations">
                <div className="flex mb-28px">
                    <Link
                        to="/results"
                        title="Back to results main page"
                        className="red2Bg shadow-md text-white hover:bg-black text-base font-semibold capitalize px-6 py-3.5 rounded-lg transition-all duration-300"
                    >
                        <span className="flex flex-row items-center space-x-2">
                            <img src={LeftArrow} alt="" />
                            <span>Results</span>
                        </span>
                    </Link>
                </div>
                <h3 className="titleDashboard mb-28px text-lg font-semibold">
                    Student detail result
                </h3>
                <div>
                    <div className="Courses mainBoxShadow rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
                        <div className="grid grid-col-1 md:grid-cols-2 gap-6 items-center">
                            <div>
                                <div className="flex flex-wrap items-center space-x-6">
                                    <div className="block w-117px h-117px rounded-full overflow-hidden">
                                        <img src={Avator} alt="" className="w-full h-auto" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-base greyText">John M David</p>
                                        <p className="mt-2px">
                                            <a href="mailto:duke112@gmail.com" className="text-sm orangeText transition-all duration-300">
                                                duke112@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:text-right">
                                <p className="text-base greyText">Total courses: <span className="redText">07</span></p>
                                <p className="text-base greyText mt-12px">Total marks of all courses: <span className="redText">700</span></p>
                                <p className="text-base greyText mt-12px">Total obtained marks: <span className="redText">532</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="titleDashboard mb-28px mt-28px text-lg font-semibold">
                    Courses results
                </h3>
                <div>
                    <div className="Courses mainBoxShadow rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
                        <Table>
                            <Thead className="tableHeader">
                                <Tr>
                                    <Th className="text-left lg:pl-16 text-base leading-7 font-medium blackText">
                                        Course title
                                    </Th>
                                    <Th className="text-center text-base leading-7 font-medium blackText">
                                        Marks Obatained
                                    </Th>
                                    <Th className="text-center text-base leading-7 font-medium blackText">
                                        Total Marks
                                    </Th>
                                    <Th className="text-center text-base leading-7 font-medium blackText">
                                        Result
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {dataExaminations.map((content, index) => (
                                    <Tr key={index}>
                                        <Td className="text-sm greyText">
                                            <Link to="/" className="transition-all duration-300">
                                                {content.name}
                                            </Link>
                                        </Td>
                                        <Td className="text-sm greyText">{content.marksObtained}</Td>
                                        <Td className="text-sm greyText">{content.totalMarks}</Td>
                                        <Td className={`text-sm ${content.status.toLowerCase() === "pending"
                                            ? "orangeText"
                                            : content.status.toLowerCase() === "fail"
                                                ? "redText"
                                                : content.status.toLowerCase() === "pass" || content.status.toLowerCase() === "done"
                                                    ? "greenText"
                                                    : null
                                            }`}>{content.status}</Td>

                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default ResultsDetail;
