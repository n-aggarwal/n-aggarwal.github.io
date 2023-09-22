// icons
import { HiHome, HiRectangleGroup, HiEnvelope } from "react-icons/hi2";
import { MdOutlineWork } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import Link from "next/link";
import { useRouter } from "next/router";
// import { Link } from "react-scroll";

// nav data
export const navData = [
  { name: "home", path: "/", hash: "#home", icon: <HiHome /> },
  { name: "work", path: "/work", hash: "#work", icon: <MdOutlineWork /> },
  {
    name: "projects",
    path: "/projects",
    hash: "#projects",
    icon: <HiRectangleGroup />,
  },
  { name: "skills", path: "/skills", hash: "#skills", icon: <GiSkills /> },
  {
    name: "contact",
    path: "/contact",
    hash: "#contacts ",
    icon: <HiEnvelope />,
  },
];

export const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[60px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.hash}
              key={index}
            >
              {/* Tooltip*/}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-3[px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
