import Image from "next/image";
import LandFreight from "@/public/LandFreight.svg";

const CargosCard = () => {
  return (
    <figure className="h-248 flex-1 flex flex-col gap-2 bg-light p-2 rounded-24 shadow-shadowGray group parent shadow-2xl relative transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">
      <Image
        src={LandFreight}
        className="w-auto h-auto object-contain"
        alt="LandFreight"
      />
      <h6 className="text14 font-nunito700 text-activeTab">
        Land <span className="font-nunito400">Freight</span>
      </h6>
      <div className="w-full bg-dimLight h-1 rounded-md shadow-inner shadow-shadowGray">
        <div className="hoverMebottom"></div>
      </div>
      <p className="text14 font-nunito700 text-activeTab group-hover:text-secondary">
        Specialized Cloud-Based ERP software for businesses
      </p>
    </figure>
  );
};

export default CargosCard;
