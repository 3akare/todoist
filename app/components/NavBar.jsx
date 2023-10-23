import Image from "next/image";
import Link from "next/link";

//svgs
import home from "../../public/home.svg";

//components
import { NavBarButton } from "@/app/components";

const NavBar = () => {
  return (
    <nav className="fixed w-screen h-20 md:h-12 bg-primary text-secondary flex items-center font-light text-sm bottom-0 md:top-0 z-[49]">
      <div className="container mx-auto flex justify-between p-4">
        <Link
          href={"/"}
          className="p-[4px] rounded-sm hover:bg-black/20 transition duration-400"
        >
          <Image src={home} alt="Home" width={28} />
        </Link>
        <NavBarButton />
      </div>
    </nav>
  );
};

export default NavBar;
