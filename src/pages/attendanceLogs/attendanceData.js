import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Modal from "./modal";
import FilterForm from "./filterForm";

function AttendanceData({ data }) {
    return (
        <div className="historyDataTable mt-12">
            <h3 className="titleDashboard mb-28px text-lg font-semibold">
                Attendance logs
            </h3>
            <FilterForm />
            <div className="mainBoxShadow AnalyticsDataTable rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
                <Table>
                    <Thead className="tableHeader">
                        <Tr>
                            <Th className="text-left lg:pl-14 text-base leading-7 font-medium">
                                Name
                            </Th>
                            <Th className="text-center text-base leading-7 font-medium">
                                Status
                            </Th>
                            <Th className="text-center text-base leading-7 font-medium">
                                Remarks
                            </Th>
                            <Th className="text-center text-base leading-7 font-medium">
                                Action
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((content, index) => (
                            <Tr key={index}>
                                <Td className="text-sm">{content.name}</Td>
                                <Td
                                    className={`text-sm ${content.status.toLowerCase() === "leave"
                                        ? "yellowText"
                                        : content.status.toLowerCase() === "absent"
                                            ? "redText"
                                            : "greenText"
                                        }`}
                                >
                                    {content.status}
                                </Td>
                                <Td className="text-sm">{content.remarks}</Td>
                                <Td className="text-sm">
                                    <Modal
                                     primaryTItle = "Attendance Status"
                                     secondaryTitle = {content.name}
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
                    <button type="button">10</button>
                    <button type="button" className="next">{`>`}</button>
                </div>
            </div>
        </div>
    );
}

export default AttendanceData;
