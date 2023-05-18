import Link from "next/link";

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
        <a href="#" className="no-underline">
          <svg
            width="31"
            height="27"
            viewBox="0 0 31 27"
            fill="none"
            xmlns="<http://www.w3.org/2000/svg>"
          >
            <path d="" fill="#9094FF" />
          </svg>
          <span></span>
        </a>
      </div>
    </header>
  );
}
