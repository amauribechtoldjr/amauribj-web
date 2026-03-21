type ContactIconPropsProps = React.SVGProps<SVGSVGElement>;

export const ContactIcon = (props: ContactIconPropsProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 12 12"
      enable-background="new 0 0 12 12"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g>
        <polygon
          fill="currentColor"
          points="6,6.3818359 12,2.0180664 12,1 0,1 0,2.0181274  "
        />

        <polygon
          fill="currentColor"
          points="6,7.6181641 0,3.2543335 0,11 12,11 12,3.2542725  "
        />
      </g>
    </svg>
  );
};
