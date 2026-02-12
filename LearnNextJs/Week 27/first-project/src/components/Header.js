export default function Header({ title, className}) {
  return <h1 className={className}>{title ? title : "Default Header"}</h1>;
}
