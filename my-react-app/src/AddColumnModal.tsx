import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// import { useState } from "react";
import { useColumnContext } from "./App";

type ModalPropTypes = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddColumnModal = ({ isOpen, setIsOpen }: ModalPropTypes) => {
  // const [columnName, setColumnName] = useState("");
  const { columnName, setColumnName, addColumnfunc } = useColumnContext();

  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-50"
      onClose={() => setIsOpen(false)}
    >
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
          <div className="flex justify-between items-start">
            <DialogTitle className="text-lg font-semibold text-black">
              Add New Column
            </DialogTitle>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-lg font-bold"
            >
              ×
            </button>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold mb-2 text-black">
              Column Name
            </label>
            <input
              type="text"
              value={columnName}
              onChange={(e) => setColumnName(e.target.value)}
              placeholder="Enter column name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            onClick={() => {
              if (columnName.trim()) {
                addColumnfunc();
                setIsOpen(false);
                setColumnName("");
              }
            }}
            className="mt-6 w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Add Column
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default AddColumnModal;
