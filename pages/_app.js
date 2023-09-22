import "../styles/globals.css";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Transition } from "../components/Transition";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div key={router.route} className="h-full">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
