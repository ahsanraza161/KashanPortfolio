import Image from "next/image";
import Profileimg from "/public/Profileimg.jpg";

const Banner = () => {
  return (
    <div className=" wrapper flex flex-col md:flex-row items-center gap-10 ">
      {/* image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border - 
          [1px] border-indigo-500 p-2 object-cover"
          src={Profileimg}
          alt="Profileimg"
        />
      </div>
      {/* desc */}
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h2 className="text-4xl text-center font-bold text-white">KASHAN KHALID</h2>
        <h3 className="text-2xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r
         from-blue-300 via-rose-300 to-indigo-300 tracking-wide">
          FULL STACK DEVELOPER
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          neque esse itaque, tempore exercitationem aut assumenda voluptates
          perspiciatis, consequatur non similique error aliquid quisquam nam
          magnam consequuntur porro, eligendi nihil.
        </p>
      </div>
    </div>
  );
};

export default Banner;
