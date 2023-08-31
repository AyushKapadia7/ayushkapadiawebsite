import { NextPage } from "next";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import About from "@/components/about/About";
import Footer from "@/components/Footer";

const AboutPage: NextPage = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <About />
      </div>
    </div>
  );
};

export default AboutPage;
