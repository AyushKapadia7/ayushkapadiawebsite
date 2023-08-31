import Image from "next/image";
import background from "@/public/images/image2.png";
interface IntroductionsProps {}

const Introductions: React.FC = () => {
  return (
    <div>
      <div className="  text-center mx-9 mb-14 md:w-7/12 md:m-auto md:mt-14 md:mb-20 lg:w-7/12 lg:m-auto lg:mt-14 lg:mb-24 xl:w-7/12 xl:ml-80 xl:mb-24 ">
        <p className="text-white antialiased hover:subpixel-antialiased text-left text-pxl  text-amber-300 drop-shadow-lg shadow-black ">
          I&apos;m Ayush Kapadia, Turning Ideas Into Real Life Products Is My
          Calling.
        </p>
      </div>
    </div>
  );
};
export default Introductions;
