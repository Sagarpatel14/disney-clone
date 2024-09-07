import { useState } from "react";
import logo from "./../assets/images/logo.png";
import userProfile from "./../assets/images/userProfile.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";
import { IMenuItem } from "../Interfaces/Header";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const menu: IMenuItem[] = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-14">
        <img src={logo} className="w-[100px] ml-4 rounded-full object-cover" />
        <div className="hidden media1140:flex items-center gap-14">
          {menu.map((item: IMenuItem) => (
            <HeaderItems name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="media1140:hidden flex items-center gap-7">
          {menu.map(
            (item: IMenuItem, index: number) =>
              index < 3 && <HeaderItems name={""} Icon={item.icon} />
          )}
        </div>
        <div className="media1140:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItems name={""} Icon={HiDotsVertical} />
          {toggle && (
            <div className="absolute w-56 bg-[#121212] mt-3 border-[1px] border-gray-800 p-5">
              {menu.map(
                (item: IMenuItem, index: number) =>
                  index > 2 && <HeaderItems name={item.name} Icon={item.icon} />
              )}
            </div>
          )}
        </div>
      </div>
      <img src={userProfile} className="w-[80px]" />
    </div>
  );
};

export default Header;
