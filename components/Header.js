import Image from "next/image";
import Link from "next/link";
import Socials from "next/link";

export const Header = () => {
  return (
    <header className=" bg-gradient-to-r from-primary/10 via-black/40 to-black/10 relative z-30 w-full flex items-center px-16  xl:h-[90px] right-0">
      <div className="container mx-auto">
        <div>
          <Link href={"/"}>
            <Image src={"/logo3.png"} width={300} height={70} right-0 />
          </Link>
        </div>
      </div>
    </header>
  );
};
