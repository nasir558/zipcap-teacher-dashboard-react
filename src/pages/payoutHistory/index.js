import React from "react";
import Layout from "../Layout/Layout";
import PayoutCounts from "../home/counts";
import PayoutHistory from "./payoutHistory";
import CurentBalance from "../../assets/images/current-balance-icon.png";

function Index() {
  const dataCounts = [
    {
      icon: CurentBalance,
      title: "Balance available to payout",
      number: "$7000",
      textColorClass: "yellowText",
    },
  ];
  const dataPayoutHistory = [
    {
      dateAndTime: "01/03/2021  09:00 AM",
      amount: "$2500",
      method: "Bank Transfer",
      status: "Pending",
    },
    {
      dateAndTime: "01/03/2021  09:00 AM",
      amount: "$2500",
      method: "Paypal Transfer",
      status: "Deposited",
    },
    {
      dateAndTime: "01/03/2021  09:00 AM",
      amount: "$2500",
      method: "Paypal Transfer",
      status: "Failed",
    },
    {
      dateAndTime: "01/03/2021  09:00 AM",
      amount: "$2500",
      method: "Bank Transfer",
      status: "Deposited",
    },
    {
      dateAndTime: "01/03/2021  09:00 AM",
      amount: "$2500",
      method: "Bank Transfer",
      status: "Failed",
    },
  ];
  return (
    <Layout>
      <div className="payOutHistory">
        <PayoutCounts title="Payout" data={dataCounts} />
        <PayoutHistory data={dataPayoutHistory} totalWithDrawl="$62200" />
      </div>
    </Layout>
  );
}

export default Index;
