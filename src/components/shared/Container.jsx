const Container = ({children,className}) => {
  return <div className={`max-w-350 mx-auto px-4 ${className}`}>{children}</div>;
};

export default Container;
