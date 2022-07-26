import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Link } from "react-router-dom";

const ResultsData = () => {

    const dataExaminations = [
        {
            name: "01: John M David",
            marksObtained: "35",
            totalMarks: "50",
            status: "Pass"

        },
        {
            name: "01: John M David",
            marksObtained: "35",
            totalMarks: "50",
            status: "Pass"

        },
        {
            name: "01: John M David",
            marksObtained: "15",
            totalMarks: "50",
            status: "Fail"

        },
        {
            name: "01: John M David",
            marksObtained: "35",
            totalMarks: "50",
            status: "Pass"

        },
        {
            name: "01: John M David",
            marksObtained: "5",
            totalMarks: "50",
            status: "Fail"

        },
        {
            name: "01: John M David",
            marksObtained: "35",
            totalMarks: "50",
            status: "Pass"

        },
    ]

    return (
        <div>
            <div className="Courses mainBoxShadow rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
                <Table>
                    <Thead className="tableHeader">
                        <Tr>
                            <Th className="text-left lg:pl-16 text-base leading-7 font-medium blackText">
                                Name
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
                                    <Link to="/results-detail" className="transition-all duration-300">
                                        <span className="greyText">{content.name}</span>
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
                <div className="pagination mt-12 space-x-3.5 flex items-center justify-center">
                    <button type="button" className="previous">{`<`}</button>
                    <button type="button" className="active">
                        1
                    </button>
                    <button type="button">2</button>
                    <button type="button">3</button>
                    <button type="button" className="more">
                        .
                    </button>
                    <button type="button" className="more">
                        .
                    </button>
                    <button type="button" className="more">
                        .
                    </button>
                    <button type="button">10</button>
                    <button type="button" className="next">{`>`}</button>
                </div>
            </div>
        </div>
    );
};

export default ResultsData;
