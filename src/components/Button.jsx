function Button({ children, onClick, variant = "primary" }) {
  // variant: primary, secondary
  function getVariantClasses() {
    switch (variant) {
      case "primary":
        return "flex gap-5 items-center justify-center border border-gray-300 cursor-pointer px-4 py-2 rounded-lg min-w-3xs";
      case "secondary":
        return "cursor-pointer hover:bg-gray-200 p-2 rounded-lg tansition duration-300 ease-in-out";
      default:
        return "bg-yellow-300 text-white";
    }
  }

  return (
    <button className={getVariantClasses()} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
