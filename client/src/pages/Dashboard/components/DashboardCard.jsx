import React from "react";

const DashboardCard = ({ icon: Icon, text, value }) => {
  return (
    <div className="w-80 rounded-md border-[1px] border-primary bg-white px-5 py-6 text-3xl font-medium text-primary shadow-sm">
      <div className="flex items-center gap-2 text-lg">
        <Icon />
        <h3 className="">{text}</h3>
      </div>
      <div>
        <p className="ml-6 mt-4 text-6xl">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
