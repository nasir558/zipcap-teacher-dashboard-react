import React from "react";
import Layout from "../Layout/Layout";
import TotalEarnings from "./totalEarnings";
import Analytics from "./analytics";

function Index() {
  const dataAnalytics = [
    {
      title: "01. Learn IOS Development",
      sales: "16",
      fee: "$130",
      revenue: "$1500"
    },
    {
      title: "02. Logo designing basics",
      sales: "18",
      fee: "$150",
      revenue: "$1800"
    },
    {
      title: "02. Master in website design",
      sales: "10",
      fee: "$150",
      revenue: "$1500"
    },
    {
      title: "04. UI/UX design, User research",
      sales: "09",
      fee: "$134",
      revenue: "$1500"
    },
    {
      title: "05. PHP crash course",
      sales: "10",
      fee: "$150",
      revenue: "$1500"
    }
  ];
  return (
    <Layout>
      <div className="earnigns">
          <TotalEarnings />
          <Analytics
            data = {dataAnalytics}
            totalRevenue = "$62200"
          />
      </div>
    </Layout>
  );
}

export default Index;
