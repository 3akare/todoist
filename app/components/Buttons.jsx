"use client";
import Image from "next/image";
import plus from "../../public/plus.svg";
import search from "../../public/search.svg";
export const NavBarButton = () => {
  return (
    <div className="p-[4px] rounded-sm hover:bg-black/20 transition duration-400 cursor-pointer">
      <Image
        src={plus}
        alt="Add Task"
        width={28}
        onClick={() => dialogControl.showModal()}
        className="hidden md:block"
      />
      <Image
        src={search}
        alt="search"
        width={28}
        className="md:hidden"
        onClick={() => {
          console.log("hello world");
        }}
      />
    </div>
  );
};
