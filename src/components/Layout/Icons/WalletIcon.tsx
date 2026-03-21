type WalletIconProps = React.SVGProps<SVGSVGElement>;

export const WalletIcon = (props: WalletIconProps) => {
  return (
    <svg
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 143.205 143.205"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <path
          fill="currentColor"
          d="M131.271,34.187H98.328v-7.936c0-5.346-4.368-9.72-9.72-9.72H54.597c-5.346,0-9.72,4.374-9.72,9.72
		v7.936H11.934C5.37,34.187,0,39.557,0,46.121v65.636c0,6.57,5.37,11.934,11.934,11.934h5.967v2.983h11.934v-2.983h83.536v2.983
		h11.934v-2.983h5.967c6.564,0,11.934-5.364,11.934-11.934V46.121C143.205,39.569,137.835,34.187,131.271,34.187z M93.465,34.187
		H49.74V23.578h43.725C93.465,23.578,93.465,34.187,93.465,34.187z"
        />
      </g>
    </svg>
  );
};
