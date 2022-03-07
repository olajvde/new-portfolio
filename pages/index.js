import About from "../components/About";
import Divider from "../components/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Open from "../components/Open";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import SiteLogo from "../components/SiteLogo";
import Skills from "../components/Skills";
import Head from "next/head";

const index = () => {
  return (
    <div>
      <Head>
        <title>Olajvde`s Portfolio</title>
      </Head>
      <SiteLogo />
      <Header />
      <Skills />
      <About />
      <Projects />
      <Divider />
      <Profile />
      <Divider />
      <Open />
      <Footer />
    </div>
  );
};

export default index;
