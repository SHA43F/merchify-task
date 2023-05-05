import "@/styles/globals.css";
import "aos/dist/aos.css";
import Aos from "aos";
import "remixicon/fonts/remixicon.css";
import type { AppProps } from "next/app";
import HomePage from "./Component/HomePage";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init();
  }, []);
  return <HomePage />;
}
