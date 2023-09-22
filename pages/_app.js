import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div key={router.route} className="h-full">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
