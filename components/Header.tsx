import Link from "next/link";

type NavItem = {
  name: string;
  link: string;
};

const navItems: NavItem[] = [
  { name: "Posts", link: "/" },
  { name: "Drafts", link: "/drafts" },
  { name: "Add Post", link: "/create" },
];

export default function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 flex items-center justify-center">
      <div className="container flex h-16 flex-row items-center">
        <Link href="/">
          <img src="/static/logo.svg" alt="" />
        </Link>
        <Link href="/" className="flex h-full items-center">
          <h1 className="brand-text">
            <span className="font-extrabold">APP</span> by seahyx
          </h1>
        </Link>
        <ul className="ml-12 flex flex-row gap-6 font-bold text-slate-300">
          {navItems.map(({ name, link }) => (
            <li className="hover:underline">
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
