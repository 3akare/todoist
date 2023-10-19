import Image from "next/image";
import Link from "next/link";

//svgs
import home from "../../public/home.svg";
import plus from "../../public/plus.svg";

const NavBar = () => {
  return (
    <nav className="fixed w-screen h-12 bg-primary text-secondary flex items-center font-light text-sm top-0">
      <div className="container mx-auto flex justify-between">
        <Link
          href={"/"}
          className="p-[4px] rounded-sm hover:bg-black/20 transition duration-400"
        >
          <Image src={home} alt="Home" width={28} />
        </Link>
        <Link
          href={"/create"}
          className="p-[4px] rounded-sm hover:bg-black/20 transition duration-400"
        >
          <Image src={plus} alt="Add Task" width={28} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
