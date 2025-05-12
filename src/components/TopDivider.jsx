const TopDivider = () => {
  return (
    <div className="w-full overflow-hidden leading-[0]">
      <svg
        className="block w-[calc(100%+1.3px)] h-[110px] rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="fill-primary"
        />
      </svg>
    </div>
  );
};
export default TopDivider;
