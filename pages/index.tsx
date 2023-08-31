import Footer from "@/components/Footer";
import Introductions from "@/components/Introduction";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="bg-custom-image w-screen h-screen">
      <NavigationBar />
      <Introductions />
      <Footer />
    </div>
  );
};

export default HomePage;

// className="bg-custom-image w-screen h-screen"
