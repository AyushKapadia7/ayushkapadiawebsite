import Image from "next/image";

const BlogItem = (props: any) => {
  return (
    <div className="container w-10/12 ml-8 mt-11 mb-28 rounded-xl shadow-2xl bg-blue md:w-9/12 md:flex md:text-left md:shadow-none  md:m-auto md:mt-20 md:mb-96 lg:w-7/12 lg:flex lg:text-left lg:shadow-none lg:m-auto lg:mt-20 lg:mb-36 xl:w-7/12 xl:flex xl:text-left xl:ml-72 xl:mt-20  xl:shadow-none xl:mb-32">
      <div>
        <Image
          width={350}
          height={200}
          src={props.image}
          className="rounded-b-md rounded-t-xl xl:rounded-xl lg:rounded-xl md:rounded-xl"
          alt="computer setup Image"
        />
      </div>
      <div className="xl:ml-9 xl:mt-2 mt-4 lg:ml-7 lg:mt-2 md:ml-7 md:mt-2">
        <a
          className=" underline font-semibold text-2xl md:no-underline md:hover:underline md:text-cyan-700 lg:no-underline lg:hover:underline lg:text-cyan-700 xl:no-underline xl:hover:underline xl:text-cyan-700"
          href={props.link}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          {props.title}
        </a>
        <p className="text-zinc-500 mt-4">
          <span>{props.date}</span> - <span>{props.minute}</span>
        </p>
        <p className="mt-4 text-lg pb-7 px-3 md:px-0 md:text-base lg:px-0 lg:text-base xl:px-0 xl:text-base">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
