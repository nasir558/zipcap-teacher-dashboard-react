import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Modal from "./modal";

const ExaminationsData = ({ data }) => {

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
                                Descriptive questions
                            </Th>
                            <Th className="text-center text-base leading-7 font-medium blackText">
                                Marking status
                            </Th>
                            <Th className="text-center text-base leading-7 font-medium blackText">
                                Action
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((content, index) => (
                            <Tr key={index}>
                                <Td className="text-sm greyText">{content.name}</Td>
                                <Td className="text-sm greyText">{content.questionCount}</Td>
                                <Td className={`text-sm ${content.markingStatus.toLowerCase() === "pending"
                                    ? "orangeText"
                                    : content.markingStatus.toLowerCase() === "fail"
                                        ? "redText"
                                        : content.markingStatus.toLowerCase() === "pass" || content.markingStatus.toLowerCase() === "done"
                                            ? "greenText"
                                            : null
                                    }`}>{content.markingStatus}</Td>
                                <Td className="text-sm">
                                    <Modal
                                        primaryTItle = {content.title1}
                                        secondaryTitle = {content.title2}
                                    />
                                </Td>
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
                    <button type="button" className="next">{`>`}</button>
                </div>
            </div>
        </div>
    );
};

export default ExaminationsData;
