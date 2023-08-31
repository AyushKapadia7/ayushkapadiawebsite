import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  return (
    <nav className=" bg-black pt-6 pb-4 font-bree  ">
      <div className="  container mx-auto flex justify-between pl-6">
        <Link href="/" className="text-white text-xl font-bold">
          Ayush Kapadia
        </Link>
        <ul className="flex space-x-4 pr-5 font-bree  text-xl  ">
          <li>
            <Link href="/about" className="text-white hover:text-gray ">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:text-gray ">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
