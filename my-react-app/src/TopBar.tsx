import { Bell, ChevronRight, Ellipsis, FileSpreadsheet, Search } from "lucide-react";
import React from "react";
import ProfilePic from "./assets/Ellipse 1.png";

type Filter = {
  handlerFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


const TopBar = ({ handlerFunction }:Filter) => {
  return (
    <div className="mb-[3px] w-[1520px] h-[56px] bg-white flex flex-row justify-items-center items-center justify-between">
      <div className="flex flex-row justify-items-center items-center">
        <div className=" ml-[13px] hover:cursor-pointer">
          <FileSpreadsheet color="#618666" size={22} />
        </div>
        <div
          onClick={() => {
            console.log("switched to workspace");
          }}
          tabIndex={0}
          className="flex flex-row justify-items-center items-center ml-[13px] group hover:cursor-pointer"
        >
          <div className="text-[#c0c0c0] group-hover:text-[#000000] group-focus:text-black">
            Workspace
          </div>
          <div className="ml-[5px]">
            <ChevronRight className="mt-[3.5px]" size={17} color="#c0c0c0" />
          </div>
        </div>
        <div
          onClick={() => {
            console.log("switched to Folder 2");
          }}
          tabIndex={0}
          className="flex flex-row justify-items-center items-center ml-[3px] group hover:cursor-pointer"
        >
          <div className="text-[#c0c0c0] group-hover:text-[#000000] group-focus:text-black">
            Folder 2
          </div>
          <div className="ml-[5px]">
            <ChevronRight className="mt-[3px]" size={17} color="#c0c0c0" />
          </div>
        </div>
        <div
          onClick={() => {
            console.log("switched to Spreadsheet 3");
          }}
          autoFocus
          tabIndex={0}
          className="flex flex-row justify-items-center items-center ml-[3px] group hover:cursor-pointer"
        >
          <div className="text-black group-hover:text-[#c0c0c0] group-focus:text-[#c0c0c0]">
            Spreadsheet 3
          </div>
          <div className="ml-[5px]">
            <Ellipsis className="mt-[3px]" size={17} color="#c0c0c0" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-items-center items-center">
        <div className="mr-[20px]">
          <div className="relative w-[175px]">
            {" "}
            <Search
              size={15}
              color="gray"
              className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            <input
              onChange={(e) => handlerFunction(e)}
              type="text"
              placeholder="Search within sheet"
              className="w-full pl-[30px] py-[8px] rounded-md border-none bg-[#e8e5e57b] placeholder:text-center placeholder:mr-[4px]"
            />
          </div>
        </div>

        <div
          onClick={() => {
            console.log("Clicked on notifications");
          }}
          className="relative mr-[17px] cursor-pointer"
        >
          <Bell size={25} />
          <div className="absolute px-1.5 bg-[#4b6a4f] rounded-[100%] text-[12px] text-white -top-1.5 left-3">
            2
          </div>
        </div>
        <div className="flex flex-row justify-items-center items-center mr-[30px]">
          <div
            onClick={() => {
              console.log("clicked on Profile Pic");
            }}
            className="mr-[7px] cursor-pointer"
          >
            <img src={ProfilePic} />
          </div>
          <div
            onClick={() => {
              console.log("clicked on Account Details");
            }}
            className="flex flex-col justify-items-center items-center cursor-pointer"
          >
            <p>Jhon Doe</p>
            <p className="text-[12px] text-[#757575]">jhon.doe...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
