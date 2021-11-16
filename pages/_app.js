import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a>Pokemon</a>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
