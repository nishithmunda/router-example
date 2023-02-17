export const Goals = ({ color }) => {
  return (
    <svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_11_74)">
        <path
          d="M21.2099 16.0849C20.5737 17.5894 19.5787 18.9151 18.3118 19.9462C17.0449 20.9773 15.5447 21.6823 13.9424 21.9997C12.34 22.317 10.6843 22.237 9.12006 21.7667C7.55578 21.2964 6.13054 20.45 4.96893 19.3016C3.80733 18.1531 2.94473 16.7377 2.45655 15.1789C1.96837 13.62 1.86948 11.9654 2.16851 10.3595C2.46755 8.75368 3.15541 7.24553 4.17196 5.96693C5.18851 4.68833 6.5028 3.67822 7.99992 3.0249"
          stroke={color || "#8D91A0"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 12.1948C22 10.8816 21.7413 9.58125 21.2388 8.36799C20.7362 7.15473 19.9997 6.05234 19.0711 5.12376C18.1425 4.19517 17.0401 3.45858 15.8268 2.95603C14.6136 2.45348 13.3132 2.19482 12 2.19482V12.1948H22Z"
          stroke={color || "#8D91A0"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_11_74">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.694824)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
