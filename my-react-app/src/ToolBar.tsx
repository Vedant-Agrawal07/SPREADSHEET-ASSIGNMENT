import {
  ArrowUpDown,
  ChevronsRight,
  Download,
  Expand,
  EyeOff,
  Funnel,
  Share2,
  Split,
  Upload,
} from "lucide-react";
import React, { useState } from "react";
import AddColumnModal from "./AddColumnModal";

type ToolBarPropTypes = {
  // columnHandlerFunc: () => void;
  sortHandlerFunc: (e: React.SyntheticEvent) => void;
};

const ToolBar = ({  sortHandlerFunc }: ToolBarPropTypes) => {
   let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[1520px] h-[48px] bg-white flex flex-row justify-items-center items-center justify-between border-t-1 border-gray-300">
      <div className="flex flex-row justify-items-center items-center justify-evenly">
        <div
          onClick={() => {
            console.log("Clicked on Tool Bar btn");
          }}
          className="flex flex-row justify-items-center items-center ml-[12px] cursor-pointer hover:bg-gray-300 p-[6px] rounded-md"
        >
          <div>Tool Bar</div>
          <div className="ml-[5px]">
            <ChevronsRight size={20} color="black" />
          </div>
        </div>

        <div className="flex flex-row justify-items-center items-center ml-[30px]">
          <div
            onClick={() => {
              console.log("Clicked on Hide Field btn");
            }}
            className="flex flex-row justify-items-center items-center p-[6px] rounded-md bg-white hover:bg-gray-300 cursor-pointer"
          >
            <div>
              <EyeOff size={17} color="black" />
            </div>
            <div className="ml-[5px]">Hide Fields</div>
          </div>
          <div
            onClick={(e) => {
              console.log("Clicked on Sort btn");
              sortHandlerFunc(e);
            }}
            className="flex flex-row justify-items-center items-center ml-[15px] p-[6px] rounded-md bg-white hover:bg-gray-300 cursor-pointer"
          >
            <div>
              <ArrowUpDown size={17} color="black" />
            </div>
            <div className="ml-[5px]">Sort</div>
          </div>
          <div
            onClick={() => {
              console.log("Clicked on Filter btn");
            }}
            className="flex flex-row justify-items-center items-center ml-[15px] p-[6px] rounded-md bg-white hover:bg-gray-300 cursor-pointer"
          >
            <div>
              <Funnel size={17} color="black" />
            </div>
            <div className="ml-[5px]">Filter</div>
          </div>
          <div
            onClick={() => {
              console.log("Clicked on Cell View btn");
            }}
            className="flex flex-row justify-items-center items-center ml-[15px] p-[6px] rounded-md bg-white hover:bg-gray-300 cursor-pointer"
          >
            <div>
              <Expand size={17} color="black" />
            </div>
            <div className="ml-[5px]">Cell View</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-items-center items-center">
        <div
          onClick={() => {
            console.log("Clicked on Import btn");
          }}
          className="mr-[10px]"
        >
          <button className="flex flex-row justify-items-center items-center rounded-md bg-white hover:bg-gray-300 p-[6px] cursor-pointer">
            <Download className="mr-[7px]" size={20} color="black" />
            <span>Import</span>
          </button>
        </div>
        <div
          onClick={() => {
            console.log("Clicked on Export btn");
          }}
          className="mr-[10px]"
        >
          <button className="flex flex-row justify-items-center items-center rounded-md bg-white hover:bg-gray-300 p-[6px] cursor-pointer">
            <Upload className="mr-[7px]" size={20} color="black" />
            <span>Export</span>
          </button>
        </div>
        <div
          onClick={() => {
            console.log("Clicked on Share btn");
          }}
          className="mr-[10px]"
        >
          <button className="flex flex-row justify-items-center items-center rounded-md bg-white hover:bg-gray-300 p-[6px] cursor-pointer">
            <Share2 className="mr-[7px]" size={20} color="black" />
            <span>Share</span>
          </button>
        </div>
        <div
          onClick={() => {
            console.log("New Column Added");
          }}
          className="mr-[10px]"
        >
          <button
            // onClick={() => setIsOpen(true)}
            onClick={() => {
              // columnHandlerFunc;
              setIsOpen(true);
            }}
            className="flex flex-row justify-items-center items-center rounded-md bg-[#4b6a4f] hover:bg-[#3e5841] px-[24px] py-[8px] cursor-pointer"
          >
            <Split className="mr-[7px]" size={20} color="white" />
            <span className="text-white">New Action</span>
          </button>
          <AddColumnModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
