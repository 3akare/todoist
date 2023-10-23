"use client";
import Image from "next/image";
import plus from "../../public/plus.svg";
export const NavBarButton = () => {
  return (
    <div
      className="p-[4px] rounded-sm hover:bg-black/20 transition duration-400"
      onClick={() => dialogControl.showModal()}
    >
      <Image src={plus} alt="Add Task" width={28} />
    </div>
  );
};
