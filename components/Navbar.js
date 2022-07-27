import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md">
      <div className="logo mx-5">
        <Link href="/">
          <a>
            <Image src="/logo.png" alt="" width={200} height={40} />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 font-bold md:text-md">
          <Link href="/tshirts">
            <a>
              <li className="">Tshirts</li>
            </a>
          </Link>
          <Link href="/hoodies">
            <a>
              <li className="">Hoodies</li>
            </a>
          </Link>
          <Link href="/stickers">
            <a>
              <li className="">Stickers</li>
            </a>
          </Link>
          <Link href="/mugs">
            <a>
              <li className="">Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-14 mx-5 md:top-4">
        <AiOutlineShoppingCart className="text-xl md:text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
