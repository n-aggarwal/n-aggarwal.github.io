import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar4.png"}
        width={1000}
        height={900}
        alt=""
        className="translate-z-0 absolute right-0 bottom-0"
      />
    </div>
  );
};

export default Avatar;
