import "bootstrap/dist/css/bootstrap.css";
import jquery from "jquery";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("jquery").then(($) => {
      // jQuery must be installed to the `window`:
      window.$ = window.jQuery = $;
      return import("bootstrap");
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
