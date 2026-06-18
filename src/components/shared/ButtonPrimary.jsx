const ButtonPrimary = ({children, onClick,className,type}) => {
  return (
    <button
    type={type}
      onClick={onClick}
      className={`flex items-center gap-2 bg-primary text-black px-6 py-3 font-semibold hover:scale-105 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
