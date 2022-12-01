import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import MobileProjects from "../components/MobileProjects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rushad's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Main />
      <Skills />
      <Projects />
      <MobileProjects/>
      <Contact />
    </div>
  );
}
