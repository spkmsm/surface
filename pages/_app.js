import CustomerFooters from "@/components/footer/CustomerFooters";
import CustomerNavbar from "@/components/header/CustomerNavbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomerNavbar />
      <Component {...pageProps} />
      <CustomerFooters />
    </>
  );
}
