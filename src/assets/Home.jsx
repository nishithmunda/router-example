export const Home = ({ color }) => {
  return (
    <svg
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 9.68044L12 2.15137L21 9.68044V21.5118C21 22.0824 20.7893 22.6295 20.4142 23.0329C20.0391 23.4364 19.5304 23.663 19 23.663H5C4.46957 23.663 3.96086 23.4364 3.58579 23.0329C3.21071 22.6295 3 22.0824 3 21.5118V9.68044Z"
        stroke={color || "#8B8D9A"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 23.6626V12.9067H15V23.6626"
        stroke={color || "#8B8D9A"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
