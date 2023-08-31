import Link from "next/link";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  // className="fixed bottom-0 left-0 w-full bg-gray-800 py-4 text-white text-center pr-5"
  return (
    <footer className="sticky top-[100vh] text-center pr-5">
      <div className=" justify-between items-center pl-10">
        <div>Ayush Kapadia © {year}</div>
        <div>
          <Link
            className="text-gray   hover:text-white mx-2"
            href="https://twitter.com/AyushKapadia7"
          >
            Twitter
          </Link>
          <Link
            className="text-gray hover:text-white mx-2"
            href="https://www.linkedin.com/in/ayush-kapadia-4083a420b/"
          >
            LinkedIn
          </Link>
          <Link
            className="text-gray hover:text-white mx-2"
            href="https://github.com/AyushKapadia7"
          >
            GitHub
          </Link>
          <Link
            className="text-gray hover:text-white mx-2"
            href="mailto:ayushkapadia619@gmail.com"
          >
            Mail
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
