import React from "react";

const BentoDiv = ({ children, px = "7", py= "7" }) => {
  return (
    <div className={`bg-[#171717] h-full w-full rounded-lg border-1 border-solid border-[#373737] hover:border-[#a855f7] px-${px} py-${py} flex flex-row gap-5`}>
      {children}
    </div>
  );
};

export default BentoDiv;