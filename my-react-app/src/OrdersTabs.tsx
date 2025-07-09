import { useState } from "react";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const OrdersTabs = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {setActiveTab(tab)
            console.log("Switched Tab");
            
          }}
          className={`relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-black focus:outline-none ${
            activeTab === tab ? "text-green-900 bg-green-50" : "bg-white"
          }`}
        >
          {tab}
          {activeTab === tab && (
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-green-900 rounded-t-sm" />
          )}
        </button>
      ))}
      <button onClick={()=>console.log("Add New Tab")
      } className="ml-2 px-4 py-2 text-lg font-bold text-gray-600 hover:text-black">
        +
      </button>
    </div>
  );
};

export default OrdersTabs;
