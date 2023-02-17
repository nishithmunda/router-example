export const Message = ({ color }) => {
  return (
    <svg
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 16.3254C21 16.896 20.7893 17.4431 20.4142 17.8465C20.0391 18.25 19.5304 18.4766 19 18.4766H7L3 22.7789V5.56962C3 4.9991 3.21071 4.45194 3.58579 4.04852C3.96086 3.6451 4.46957 3.41846 5 3.41846H19C19.5304 3.41846 20.0391 3.6451 20.4142 4.04852C20.7893 4.45194 21 4.9991 21 5.56962V16.3254Z"
        stroke={color || "#8D91A0"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
