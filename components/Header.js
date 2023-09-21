import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

export const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-primary/10 via-black/40 to-black/10 relative z-30 w-full flex items-center px-16  xl:h-[90px] right-0">
      <div className="container mx-auto justify-between items-center gap-y-6">
        <div className="flex flex-col lg:flex-row">
          <Link href={"/"}>
            <Image src={"/logo3.png"} width={300} height={70} />
          </Link>
        </div>
      </div>
      <div className=" bg-black absolute right-0 xl:w-30 xl:h-20"></div>
    </header>
  );
};
