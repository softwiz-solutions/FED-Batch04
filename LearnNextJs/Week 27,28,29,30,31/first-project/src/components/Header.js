export default function Header({ children, className }) {
  // return <h1 className={className}>{title ? title : "Default Header"}</h1>;
  return (
    <h1 className={className}>{children ? children : "Default Header"}</h1>
  );
}
