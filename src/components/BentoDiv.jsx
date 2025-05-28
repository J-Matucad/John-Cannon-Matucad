import React from "react";

const BentoDiv = ({ children }) => {
  return (
    <div className={`bg-[#171717] h-full w-full rounded-lg border-1 border-solid border-[#373737] hover:border-[#a855f7] px-7 py-7 flex flex-row gap-5`}>
      {children}
    </div>
  );
};

export default BentoDiv;