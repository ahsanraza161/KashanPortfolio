import Title from "./Title";
import { SiInformatica } from "react-icons/si";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text='About Me' icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          bagherat
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
