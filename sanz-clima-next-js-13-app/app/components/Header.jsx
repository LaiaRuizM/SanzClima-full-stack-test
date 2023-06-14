import Link from "next/link";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Calc",
    route: "/calc",
  },
  {
    label: "History",
    route: "/history",
  },
];

export function Header() {
  return (
    <header>
      <nav>
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
