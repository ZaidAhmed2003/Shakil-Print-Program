const Button = ({ children, type, handleOnClick, size }) => {
  return (
    <button
      onClick={handleOnClick}
      type={type}
      className={`rounded-md bg-primary ${size === "small" ? "px-4 py-2" : "px-6 py-4"} text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
