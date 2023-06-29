import { ReachOutOptionProps } from "@/types/index.types";
import Image from "next/image";
import React from "react";

const ReachOutCard: React.FC<ReachOutOptionProps> = ({
  Icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-3 p-3 py-5 rounded-24 flex-1 box-shadow max-w-254 max-h-320 h-full  text-center">
      <Image
        src={Icon}
        className="w-auto h-auto object-contain mx-auto"
        alt=""
      />
      <h4 className="text14 font-sharpsans700">{title}</h4>
      <p className="text14 font-nunito400">{description}</p>
    </div>
  );
};

export default ReachOutCard;
