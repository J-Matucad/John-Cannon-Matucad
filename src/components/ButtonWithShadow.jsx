import React from "react";

const ButtonWithShadow = ({
  children,
  href = "https://github.com/J-Matucad",
  className = "",
  style = {},
  target = "_blank",
  rel = "noopener noreferrer",
  ...rest
}) => {
  return (
    <a
      href={href}
      className={`flex items-center justify-center bg-[#0b0b0b] border-solid border-1 border-[#a855f7] shadow-[3px_3px_0px_0px_#a855f7] text-white font-bold py-2 px-4 rounded-lg w-full h-full hover:text-[#a855f7] ${className}`}
      style={style}
      target={target}
      rel={rel}
      {...rest}
    >
      {children}
    </a>
  );
};

export default ButtonWithShadow;