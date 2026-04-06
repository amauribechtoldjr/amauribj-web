type InterfaceIconProps = React.SVGProps<SVGSVGElement>;

export const InterfaceIcon = (props: InterfaceIconProps) => {
  return (
    <svg
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 6h7v10H9V6zm2 2v6h3V8h-3zM0 14h7v2H0v-2zm0-8h7v2H0V6zm0 4h7v2H0v-2zM0 0h16v4H0V0z"
        fill-rule="evenodd"
      />
    </svg>
  );
};
