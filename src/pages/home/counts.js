import React from "react";

const Counts = ({ title, data }) => {
  return (
    <div className="counts">
      {!!title && (
        <h3 className="titleDashboard mb-28px text-lg font-semibold">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {data.map((content, index) => (
          <div
            key={index}
            className="p-15px countItem bg-white rounded-md overflow-hidden transition-all duration-300"
          >
            <div className="flex flex-row space-x-2 items-center">
              <img
                src={content.icon}
                className="flex-shrink-0 w-45px shadow-md h-auto rounded-lg"
                alt={content.title}
              />
              <div>
                <p className="text-sm capitalize greyText">{content.title}</p>
                <p className={`text-3xl font-bold ${content.textColorClass}`}>{content.number}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counts;
