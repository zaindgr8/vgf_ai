import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >

      <Head>
        <title>Ai Love | Virtual Girlfriend Experience </title>
        <meta name="Ai Love" content="Virtual Girlfriend Experience" />
        <meta name="theme-color" content="#f13024" />
        <link rel="shortcut icon" href="/dp3.png" />
      </Head>
      <TopLeftImg />
      <Header className="" />
      {children}
    </main>
  );
};

export default Layout;
