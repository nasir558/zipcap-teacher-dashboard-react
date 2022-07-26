import React from "react";
import Layout from "../Layout/Layout";
import AttendanceData from "./attendanceData";

function Index() {

  const dataPayoutHistory = [
    {
      name: "John M David",
      status: "Leave",
      remarks: "Application submitted",
      id: "231",
    }, 
    {
        name: "John M David",
        status: "Absent",
        remarks: "Application submitted",
        id: "231",
      },
      {
        name: "John M David",
        status: "Present",
        remarks: "Application submitted",
        id: "231",
      },
      {
        name: "John M David",
        status: "Present",
        remarks: "Application submitted",
        id: "231",
      },
  ];
  return (
    <Layout>
      <div className="payOutHistory attendance">
        <AttendanceData data={dataPayoutHistory} />
      </div>
    </Layout>
  );
}

export default Index;
