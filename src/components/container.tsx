import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-[90%] mx-auto lg:w-[90%]">{children}</div>;
};

export default Container;
