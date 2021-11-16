import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav className="nav">
        <Link href="/home">
          <a className="nav-link"> Home </a>
        </Link>
        <Link href="/pokemon">
          <a className="nav-link"> Pokemon </a>
        </Link>
        <Link href="/mis-pokemon/ISR">
          <a className="nav-link"> Pokemon ISR </a>
        </Link>
        <Link href="/mis-pokemon/SSG">
          <a className="nav-link"> Pokemon SSG </a>
        </Link>
        <Link href="/mis-pokemon/SSR">
          <a className="nav-link"> Pokemon SSR </a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
