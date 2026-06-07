export const ChevronDownIcon = ({
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M11 12L9 12V14H11V16H13V14H15V12H13V14L11 14V12ZM17 10V12H15V10H17ZM17 10V8H19V10H17ZM7 10V12H9V10H7ZM7 10L7 8H5L5 10H7Z"
      />
    </svg>
  );
};
