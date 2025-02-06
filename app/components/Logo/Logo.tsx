const Logo = ({ color }) => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 50 39"
      fill="none"
      className={`mx-auto mb-12 ${color} `}
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};
export default Logo;
