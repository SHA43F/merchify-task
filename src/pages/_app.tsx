import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HomePage from "./component/HomePage";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HomePage />
    </>
  );
}
