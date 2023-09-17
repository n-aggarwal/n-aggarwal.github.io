import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/avatar.png'} width={737} height={678} alt='' className="translate-z-0 absolute right-0 bottom-0" />
  </div>;
};

export default Avatar;