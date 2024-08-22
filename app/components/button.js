export default function Button(props) {
  const sizes = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-2 text-sm",
    base: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const variants = {
    default: "bg-blue-500 text-white",
    outline: "border border-blue-500 text-blue-500",
    ghost: "bg-transparent text-blue-500",
  };

  return (
    <button
      {...props}
      className={`${props.variant ? variants[props.variant] : variants['default']} 
                  ${props.size ? sizes[props.size] : sizes['base']} 
                  ${props.className}`}
    >
      {props.children}
    </button>
  );
}
