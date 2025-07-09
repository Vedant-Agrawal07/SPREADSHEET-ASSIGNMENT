import { Ellipsis, Link2, RefreshCw, Split } from "lucide-react";

const GroupHeader = () => {
  return (
    <div className="sticky top-0 z-10 bg-white text-black text-sm">
      <div className="flex">
        <div className="w-[35.5px] bg-white"></div>

        <div className="w-[686.5px] text-center py-2 border-t-gray-300 bg-[#e2e2e2] font-normal text-[13px]">
          <div className="flex flex-row justify-items-center items-center">
            <div className="flex flex-row justify-items-center items-center bg-[#eeeeee] p-[4px] rounded-md ml-[8px]">
              <div>
                <Link2 color="#1a8cff" size={15} />
              </div>
              <div className="ml-1">Q3 Financial Overview</div>
            </div>
            <div className="ml-[10px]">
              <RefreshCw size={17} color="#fa6736" />
            </div>
          </div>
        </div>

        <div className="w-[135.5px] text-center py-2 bg-white text-black font-normal text-[13px]"></div>

        <div className="w-[135.5px] text-center py-2 pb-3 bg-[#d2e0d4] font-normal text-[13px] flex justify-center items-center">
          <div className="flex flex-row justify-items-center items-center">
            <div>
              <Split color="gray" size={15} />
            </div>
            <div className="ml-1">
              <span>ABC</span>
            </div>
            <div className="ml-1">
              <Ellipsis color="gray" />
            </div>
          </div>
        </div>

        <div className="w-[271px] text-center py-2 bg-[#dccffc] font-normal text-[13px]">
          <div className="flex flex-row justify-center items-center">
            <div>
              <Split color="white" size={15} />
            </div>
            <div className="ml-1">
              <span>Answer A Question</span>
            </div>
            <div className="ml-1">
              <Ellipsis color="gray" />
            </div>
          </div>
        </div>

        <div className="w-[135px] text-center py-2 bg-[#fac2af] font-normal text-[13px]">
          <div className="flex flex-row justify-center items-center">
            <div>
              <Split color="white" size={15} />
            </div>
            <div className="ml-1">
              <span>Extract</span>
            </div>
            <div className="ml-1">
              <Ellipsis color="gray" />
            </div>
          </div>
        </div>

        <div className="w-[135px] text-black bg-[#e2e2e2] relative font-normal text-[13px]">
          <div className="ml-[10px]">
            <span className="-mt-1.5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl leading-none">
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupHeader;
