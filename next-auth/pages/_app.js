import Navbar from "../Components/Navbar";
import "../styles/globals.css";
import "../Components/Navbar.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
