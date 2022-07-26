import React from "react";
import Cards from "./cards";
import Layout from "../Layout/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="wishList paymentMethod">
        <h3 className="titleDashboard mb-28px text-lg font-semibold mt-5">
          Bank Details
        </h3>
        <div className="settingsTabs Courses mainBoxShadow rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
          <Cards />
        </div>
      </div>
    </Layout>
  );
};

export default Index;