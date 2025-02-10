import React from "react";
import { LucideIcon } from "lucide-react";

type CountCardsProps = {
  name: string;
  count: number;
  icon: LucideIcon; // Define as a Lucide icon type
  desc: string;
};

const CountCards: React.FC<CountCardsProps> = ({ name, count, icon: Icon, desc }) => {
  return (
    <div className="border w-full p-3 px-6 md:w-[16rem] rounded-sm shadow-sm flex-col space-y-4">
      <div className="top flex justify-between">
        <h3 className="font-bold">{name}</h3>
        <div className="icon">
          <Icon className="w-6 h-6 text-grey-500"  /> {/* Render the component */}
        </div>
      </div>
      <h2 className="count-number font-bold text-3xl">{count}</h2>
      <p className="small-desc text-gray-500">{desc}</p>
    </div>
  );
};

export default CountCards;
