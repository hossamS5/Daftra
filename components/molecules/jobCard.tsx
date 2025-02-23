import React from "react";
import FavouriteIcon from "@/assets/icons/favouriteIcon.svg";
import CalenderIcon from "@/assets/icons/calenderIcon.svg";
import LocationIcon from "@/assets/icons/locationIcon.svg";

interface IProps {
  item: {
    title: string;
    subtitle: string;
    location: string;
    postedDate: string;
    experience: string;
    jobTime: string;
    jobeType: string;
    describtion: string;
    icon: React.ReactNode;
  };
}

const JobCard: React.FC<IProps> = ({ item }) => {
  return (
    <div className="w-full flex justify-between bg-white shadow-sm rounded-md border border-[#F3FDF3] px-[41px] py-[35px] cursor-pointer hover:border-secondary-10 transition-all duration-150">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-[18px]">
          <div className="flex items-center gap-[22px]">
            {item.icon}

            <div className="flex flex-col gap-2">
              <h2 className="text-xl md:text-[25px] font-medium text-[#161616]">
                {item.title}
              </h2>
              <span className="text-[#14A077] font-bold text-[17px]">
                {item.subtitle}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-[10px] flex-wrap">
            <div className="flex items-center gap-[3px]">
              <LocationIcon />
              <span className="text-[17px] text-primary-10">
                {item.location}
              </span>
            </div>

            <div className="flex items-center gap-[3px]">
              <CalenderIcon />
              <span className="text-[17px] text-primary-10">
                {item.postedDate}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 flex-wrap">
            <div className="p-1 rounded bg-[#F7F7F7] text-primary-10">
              {item.experience}
            </div>
            <div className="p-1 rounded bg-[#F7F7F7] text-primary-10">
              {item.jobTime}
            </div>
            <div className="p-1 rounded bg-[#F7F7F7] text-primary-10">
              {item.jobeType}
            </div>
          </div>
        </div>

        <div className="text-[17px] text-primary-10 mt-[35px]">
          {item.describtion}
        </div>
      </div>

      <div>
        <FavouriteIcon />
      </div>
    </div>
  );
};

export default JobCard;
