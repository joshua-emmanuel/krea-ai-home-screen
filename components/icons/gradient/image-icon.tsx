export default function ImageIconGradient() {
  return (
    <div className="relative aspect-square rounded-[10px] inset-ring-[0.5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_1px_5px_rgba(255,255,255,0.1)] inset-ring-black/10 block shrink-0 text-white w-[3.125rem] h-[3.125rem] bg-[linear-gradient(0deg,#D0E3F1_0%,#294962_100%)]">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-20 m-auto"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.4763 9.85043C10.4763 10.8104 9.69763 11.589 8.73768 11.589C7.77772 11.589 7 10.8104 7 9.85043C7 8.89049 7.77772 8.11182 8.73768 8.11182C9.69763 8.11182 10.4754 8.88955 10.4763 9.84856V9.85043Z"
          fill="currentColor"
        ></path>
        <rect
          x="2.75"
          y="3.86182"
          width="18.5"
          height="16.5"
          rx="3.25"
          stroke="currentColor"
          strokeWidth="1.5"
        ></rect>
        <path
          d="M15.758 13.1118C17.5271 13.1118 19.1544 14.6938 20 15.4766V19.1118H4C4 19.1118 5.29914 17.0464 6.6586 16.0349C8.01806 15.0235 9.56678 16.6015 11.2673 16.6015C12.9687 16.6015 13.9898 13.1118 15.758 13.1118Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
}
