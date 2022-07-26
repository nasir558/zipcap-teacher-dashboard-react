import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function PayoutHistory({ data, totalWithDrawl }) {
  return (
    <div className="historyDataTable mt-12">
      <h3 className="titleDashboard mb-28px text-lg font-semibold">
        Payout history
      </h3>
      <div className="mainBoxShadow AnalyticsDataTable rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
        <Table>
          <Thead className="tableHeader">
            <Tr>
              <Th className="text-center text-base leading-7 font-medium">
                Date & Time
              </Th>
              <Th className="text-center text-base leading-7 font-medium">
                Amount
              </Th>
              <Th className="text-center text-base leading-7 font-medium">
                Method
              </Th>
              <Th className="text-center text-base leading-7 font-medium">
                Status
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((content, index) => (
              <Tr key={index}>
                <Td className="text-sm">{content.dateAndTime}</Td>
                <Td className="text-sm">{content.amount}</Td>
                <Td className="text-sm">{content.method}</Td>
                <Td
                  className={`text-sm ${
                    content.status.toLowerCase() === "pending"
                      ? "yellowText"
                      : content.status.toLowerCase() === "failed"
                      ? "redText"
                      : "greenText"
                  }`}
                >
                  {content.status}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <p className="text-sm text-right font-semibold greenText mt-7">
          Total Withdrawals {totalWithDrawl}
        </p>
      </div>
    </div>
  );
}

export default PayoutHistory;
