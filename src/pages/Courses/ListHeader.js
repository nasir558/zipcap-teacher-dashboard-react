import React from "react";
import { Link } from "react-router-dom";

const ListHeader = ({ title, btnText, btnLink }) => {
  return (
    <div className="listHeader">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h3 className="titleDashboard mb-28px text-lg font-semibold">
          {title}
        </h3>
        {!!btnText && (
          <Link
            to={btnLink}
            title=""
            className="red2Bg shadow-md text-white hover:bg-black text-base font-semibold capitalize px-2.5 py-3.5 rounded-lg transition-all duration-300"
          >
            {btnText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ListHeader;
