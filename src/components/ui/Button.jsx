const VARIANTS = {
  primary:
    "bg-primary text-white  hover:border-primary hover:bg-primary-light hover:text-primary",
  secondary:
    "bg-secondary text-white hover:border-secondary hover:bg-secondary-light hover:text-secondary",
  success: "bg-success text-white hover:bg-success/80",
  danger: "bg-error text-white hover:bg-error/80",
};

function Button({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      {...props}
      className={` w-full whitespace-nowrap p-3 cursor-pointer rounded-2xl border-2 border-transparent transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 ${VARIANTS[variant]} ${className} `}
    >
      {children}
    </button>
  );
}

export default Button;
