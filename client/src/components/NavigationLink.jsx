import React from "react";

const NavigationLink = ({ icon: Icon, text, link, isActiveLink }) => {
  return (
    <div
      className={`hover:bg-primary flex cursor-pointer items-center gap-2 rounded-md px-4 py-4 hover:text-white ${isActiveLink(link) ? "bg-primary" : "bg-transparent"} ${isActiveLink(link) ? "text-white" : "text-black"}`}
    >
      <Icon className="text-lg" />
      <h3 className="font-medium">{text}</h3>
    </div>
  );
};

export default NavigationLink;
