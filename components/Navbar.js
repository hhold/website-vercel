import Link from "next/link";

export default function Navbar(props) {
  return (
    <nav className="p-5 pb-0 flex flex-row justify-between items-center">
      <Link href="/">
        <a className="font-c text-blue-450 dark:text-red-500 text-2xl">Home</a>
      </Link>

      {props.name && (
        <a
          className="font-sf text-xs hidden lg:block tooltip"
          href={props.url}
          target="_blank"
          rel="noopener"
        >
          🎵 {props.name}
          <span className="tooltiptext">
            What I was listening to while writing this
          </span>
        </a>
      )}
    </nav>
  );
}
