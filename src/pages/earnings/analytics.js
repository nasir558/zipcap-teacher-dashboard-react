import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

function Analytics({ data, totalRevenue }) {
  return (
    <div className="analytics mt-12">
      <h3 className="titleDashboard mb-28px text-lg font-semibold">
        Analytics
      </h3>
      <div className="mainBoxShadow AnalyticsDataTable rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
        <Table>
          <Thead className="tableHeader">
            <Tr>
              <Th className="text-left lg:pl-24 text-base leading-7 font-medium">
                Title
              </Th>
              <Th className="text-center text-base leading-7 font-medium">
                Enrollments
              </Th>
              <Th className="text-center text-base leading-7 font-medium">
                Fee
              </Th>
              <Th className="text-center text-base leading-7 font-medium">
                Revenue
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((content, index) => (
              <Tr key={index}>
                <Td className="text-sm">{content.title}</Td>
                <Td className="text-sm">{content.sales}</Td>
                <Td className="text-sm">{content.fee}</Td>
                <Td className="text-sm">{content.revenue}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <p className="text-sm text-right font-semibold warningText mt-7">Total revenue {totalRevenue}</p>
      </div>
    </div>
  );
}

export default Analytics;
