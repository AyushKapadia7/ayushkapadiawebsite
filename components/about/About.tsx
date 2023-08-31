import Link from "next/link";

const About = () => {
  return (
    <div>
      <div className="mt-14  text-left mx-9 mb-14 md:w-7/12 md:m-auto md:mt-14 md:mb-20 lg:w-7/12 lg:m-auto lg:mt-14 lg:mb-24 xl:w-7/12 xl:ml-80 xl:mb-24">
        <h1 className="text-4xl font-bold text-center xl:mb-14">About</h1>
        <p className="text-xl text-gray-700 mt-11">
          My name is Ayush Kapadia and I&apos;m a Software Developer. I have
          learned Web Development, I just make Web Application Through ReactJS
          And NextJs and I am also familier with TypeScript.
        </p>
        <p className="text-xl text-gray-700 mt-9">
          So How it all started?. Well, I have a degree in Bachelor of Commerce
          field and while I was pursuing that, my brother encouraged me to start
          learning Web Development. And after couple of months I decided that I
          want to have a career in this field, so here we are!!
        </p>
        <p className="text-xl text-gray-700 mt-9">
          About my interests, I&apos;m not a typical book-reading person but I
          have developed habit of reading books.I had read{" "}
          <span>
            <a
              rel="noopener noreferrer"
              target={"_blank"}
              className="underline hover:text-blue"
              href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/up%20&%20going/README.md#you-dont-know-js-up--going"
            >
              Up & Going (You Don&apos;t Know JS)
            </a>
          </span>{" "}
          I&apos;m Typically an Anime watcher and about gaming I play Fortnite
        </p>

        <p className="text-xl text-gray-700 mt-9">
          I hope you enjoyed it. You can reach out to me on this email{" "}
          <span>
            <a
              rel="noopener noreferrer"
              className="underline hover:text-blue"
              href="mailto: ayushkapadia619@gmail.com"
            >
              ayushkapadia619@gmail.com
            </a>
          </span>
        </p>
        <p className="text-l  text-gray-700 mt-9">
          You can also contact me on
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
        </p>
      </div>
    </div>
  );
};

export default About;
