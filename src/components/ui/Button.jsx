function Button({
  children,
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={`text-white w-full whitespace-nowrap bg-primary p-3 cursor-pointer rounded-2xl border-2 border-transparent hover:border-primary hover:bg-primary-light hover:text-primary transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
