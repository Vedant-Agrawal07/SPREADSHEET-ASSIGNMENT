import { useEffect, useState } from "react";
import "./App.css";
import GroupHeader from "./GroupHeader.tsx";
import { defaultData, type dummy } from "./constants/data";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { type Row } from "@tanstack/react-table";
import {
  AlertTriangle,
  Briefcase,
  Calendar,
  ChevronDown,
  CircleChevronDown,
  Currency,
  Globe,
  User,
  X,
} from "lucide-react";
import ToolBar from "./ToolBar.tsx";
import TopBar from "./TopBar.tsx";
const columnHelper = createColumnHelper<dummy>();
const emptyAlwaysBottomSort = <T,>(
  rowA: Row<T>,
  rowB: Row<T>,
  columnId: string
): number => {
  const a = rowA.getValue(columnId);
  const b = rowB.getValue(columnId);

  const isEmpty = (val: unknown) =>
    val === "" || val === null || val === undefined;

  const aEmpty = isEmpty(a);
  const bEmpty = isEmpty(b);

  if (aEmpty && bEmpty) return 0;

  if (aEmpty) return 1;

  if (bEmpty) return -1;

  if (typeof a === "number" && typeof b === "number") return a - b;

  return String(a).localeCompare(String(b));
};

const getInitialColumns = (
  setColumns: React.Dispatch<React.SetStateAction<ColumnDef<dummy>[]>>
) => [
  columnHelper.accessor("id", {
    id: "id",
    sortingFn: emptyAlwaysBottomSort,
    cell: (info) => (
      <div className="flex justify-center justify-items-center whitespace-nowrap">
        {info.getValue()}
      </div>
    ),
    header: () => (
      <span className="flex items-center justify-center whitespace-nowrap text-2xl text-[#b7b7b7]">
        #
      </span>
    ),
    size: 32,
  }),

  columnHelper.accessor("jobRequest", {
    id: "jobRequest",
    sortingFn: emptyAlwaysBottomSort,
    cell: (info) => (
      <div className="flex bg-[#f7f7f7]">
        <div
          className="-ml-3.5 mr-auto max-w-xs truncate text-black"
          title={info.getValue()}
        >
          {info.getValue()}
        </div>
      </div>
    ),
    header: () => (
      <div className="flex flex-row justify-between">
        <div className="flex justify-center items-center whitespace-nowrap text-[#757575] font-bold font-sans text-[10px] leading-4">
          <Briefcase className="mr-2 flex-shrink-0" size={16} /> Job Request
        </div>
        <div className="flex flex-row justify-items-center items-center -mr-0.5">
          <X
            onClick={(e) => {
              e.stopPropagation();
              setColumns((prev) =>
                prev.filter((col) => col.id !== "jobRequest")
              );
            }}
            className="ml-2 text-gray-500 hover:bg-red-300 hover:rounded-md font-bold opacity-0 hover:opacity-100"
            size={14}
          >
            x
          </X>
          <ChevronDown size={20} />
        </div>
      </div>
    ),
    size: 256,
  }),
  columnHelper.accessor("submitted", {
    id: "submitted",
    sortingFn: emptyAlwaysBottomSort,
    cell: (info) => (
      <div className="flex">
        <div className="ml-7.5 mr-auto text-black"> {info.getValue()}</div>
      </div>
    ),
    header: () => (
      <div className="flex flex-row justify-between">
        <div className="flex justify-center items-center whitespace-nowrap text-[#757575] font-bold font-sans text-[10px]">
          <Calendar className="mr-2 flex-shrink-0" size={16} /> Submitted
        </div>
        <div className="flex flex-row justify-items-center items-center -ml-1">
          <X
            onClick={(e) => {
              e.stopPropagation();
              setColumns((prev) =>
                prev.filter((col) => col.id !== "submitted")
              );
            }}
            className="ml-2 text-gray-500 hover:bg-red-300 hover:rounded-md font-bold opacity-0 hover:opacity-100"
            size={14}
          >
            x
          </X>
          <ChevronDown size={20} />
        </div>
      </div>
    ),
    size: 124,
  }),

  columnHelper.accessor("status", {
    id: "status",
    sortingFn: emptyAlwaysBottomSort,
    cell: (info) => {
      const value = info.getValue();

      switch (value) {
        case "In-process":
          return (
            <div className="flex justify-center items-center w-full h-full">
              <div className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-[#fff3d6] text-[#84640b] whitespace-nowrap">
                {value}
              </div>
            </div>
          );
        case "Need to start":
          return (
            <div className="flex justify-center items-center w-full h-full">
              <div className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-[#e2e8f0] text-[#475569] whitespace-nowrap">
                {value}
              </div>
            </div>
          );
        case "Complete":
          return (
            <div className="flex justify-center items-center w-full h-full">
              <div className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-200 text-green-700 whitespace-nowrap">
                {value}
              </div>
            </div>
          );
        case "Blocked":
          return (
            <div className="flex justify-center items-center w-full h-full">
              <div className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-red-200 text-red-700 whitespace-nowrap">
                {value}
              </div>
            </div>
          );
        default:
          return;
      }
    },
    header: () => (
      <div className="flex flex-row justify-between">
        <div className="flex justify-center items-center whitespace-nowrap text-[#757575] font-sans text-[10px] font-bold">
          <CircleChevronDown className="mr-2 flex-shrink-0" size={16} /> Status
        </div>
        <div className="-mr-1 flex flex-row justify-items-center items-center">
          <X
            onClick={(e) => {
              e.stopPropagation();
              setColumns((prev) => prev.filter((col) => col.id !== "status"));
            }}
            className="ml-2 text-gray-500 hover:bg-red-300 hover:rounded-md font-bold opacity-0 hover:opacity-100"
            size={14}
          >
            x
          </X>
          <ChevronDown size={20} />
        </div>
      </div>
    ),
    size: 124,
  }),

  columnHelper.accessor("submitter", {
    id: "submitter",
    sortingFn: emptyAlwaysBottomSort,
    cell: (info) => (
      <div className="flex">
        <div
          className="-ml-3.5 mr-auto max-w-xs truncate text-black"
          title={info.getValue()}
        >
          {info.getValue()}
        </div>
      </div>
    ),
    header: () => (
      <div className="flex flex-row justify-between">
        <div className="flex justify-center items-center whitespace-nowrap text-[#757575] font-sans text-[10px] font-bold">
          <User className="mr-2 flex-shrink-0" size={16} /> Submitter
        </div>
        <div className="flex flex-row justify-items-center items-center -ml-0.5">
          <X
            onClick={(e) => {
              e.stopPropagation();
              setColumns((prev) =>
                prev.filter((col) => col.id !== "submitter")
              );
            }}
            className="ml-2 text-gray-500 hover:bg-red-300 hover:rounded-md font-bold opacity-0 hover:opacity-100"
            size={14}
          >
            x
          </X>
          <ChevronDown size={20} />
        </div>
      </div>
    ),
    size: 124,
  }),

  columnHelper.accessor("url", {
    id: "url",
    sortingFn: emptyAlwaysBottomSort,
    cell: (info) => (
      <div className="inline-block w-full">
        <div
          className="-ml-3.5 mr-auto max-w-xs truncate"
          title={info.getValue()}
        >
          <a href={info.getValue()} className="text-black hover:underline">
            {info.getValue()}
          </a>
        </div>
      </div>
    ),
    header: () => (
      <div className="flex flex-row justify-between">
        <div className="flex justify-center items-center whitespace-nowrap text-[#757575] font-sans text-[10px] font-bold">
          <Globe className="mr-2 flex-shrink-0" size={16} /> URL
        </div>
        <div className="flex flex-row justify-items-center items-center -mr-1.5">
          <X
            onClick={(e) => {
              e.stopPropagation();
              setColumns((prev) => prev.filter((col) => col.id !== "url"));
            }}
            className="ml-2 text-gray-500 hover:bg-red-300 hover:rounded-md font-bold opacity-0 hover:opacity-100"
            size={14}
          >
            x
          </X>
          <ChevronDown size={20} />
        </div>
      </div>
    ),
    size: 124,
  }),

  columnHelper.accessor("assigned", {
    id: "assigned",
    sortingFn: emptyAlwaysBottomSort,
    cell: (info) => (
      <div className="flex">
        <div
          className="-ml-3.5 mr-auto max-w-xs truncate text-black"
          title={info.getValue()}
        >
          {info.getValue()}
        </div>
      </div>
    ),
    header: () => (
      <div className="flex flex-row justify-between">
        <div className="bg-[#cfe5d2] flex justify-center items-center whitespace-nowrap text-[#757575] font-sans text-[10px] font-bold">
          <User className="mr-2 flex-shrink-0" size={16} /> Assigned
        </div>
      </div>
    ),
    size: 124,
  }),

  columnHelper.accessor("priority", {
    id: "priority",
    sortingFn: emptyAlwaysBottomSort,
    cell: (info) => {
      const value = info.getValue();
      switch (value) {
        case "Medium":
          return (
            <div className="flex justify-center justify-items-center text-yellow-600 font-medium whitespace-nowrap">
              {value}
            </div>
          );
        case "High":
          return (
            <div className="flex justify-center justify-items-center text-red-600 font-medium whitespace-nowrap">
              {value}
            </div>
          );
        case "Low":
          return (
            <div className="flex justify-center justify-items-center text-blue-600 font-medium whitespace-nowrap">
              {value}
            </div>
          );
        default:
          return <div className="whitespace-nowrap">{value}</div>;
      }
    },
    header: () => (
      <div className="flex flex-row justify-between -ml-1">
        <div className="bg-[#e2daf7] px-2 py-1 rounded-md flex justify-center items-center whitespace-nowrap font-sans text-[10px] text-[#757575] font-bold">
          <AlertTriangle className="mr-2 flex-shrink-0" size={16} />
          Priority
        </div>
      </div>
    ),
    size: 124,
  }),
  columnHelper.accessor("dueDate", {
    id: "dueDate",
    sortingFn: emptyAlwaysBottomSort,
    cell: (info) => (
      <div className="flex">
        <div className="ml-7.5 mr-auto text-black">{info.getValue()}</div>
      </div>
    ),
    header: () => (
      <div className="flex flex-row justify-between -ml-1">
        <div className="px-2 py-1 rounded-md bg-[#e2daf7] flex justify-center items-center whitespace-nowrap font-sans text-[10px] text-[#757575] font-bold">
          <Calendar className="mr-2 flex-shrink-0" size={16} />
          Due Date
        </div>
      </div>
    ),
    size: 124,
  }),

  columnHelper.accessor("estValue", {
    id: "estValue",
    sortingFn: emptyAlwaysBottomSort,
    cell: (info) => (
      <div className="flex">
        <div className="ml-7 mr-auto font-medium whitespace-nowrap text-black">
          <span className="text-black">{info.getValue()}</span>
          <span className="text-gray-500">
            {info.getValue() === "" ? "" : ` ${" "}₹`}
          </span>
        </div>
      </div>
    ),
    header: () => (
      <div className="flex flex-row justify-between -ml-1">
        <div className="px-2 py-1 rounded-md bg-[#ffe3d7] flex justify-center items-center whitespace-nowrap font-sans text-[10px] text-[#757575] font-bold">
          <Currency className="mr-2 flex-shrink-0" size={16} />
          <span>Est. Value</span>
        </div>
      </div>
    ),
    size: 124,
  }),

  {
    id: "add",
    sortingFn: emptyAlwaysBottomSort,
    cell: () => (
      <div className="flex justify-center items-center w-full h-full"></div>
    ),
    header: () => null,
    size: 124,
  },
];

function App() {
  const [resizingColumn, setResizingColumn] = useState<string | null>(null);
  const [resizerPosition, setResizerPosition] = useState<{
    x: number;
    columnId: string;
  } | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (resizingColumn && resizerPosition) {
        const tableRect = document
          .querySelector("table")
          ?.getBoundingClientRect();
        if (tableRect) {
          setResizerPosition({
            x: e.clientX - tableRect.left,
            columnId: resizingColumn,
          });
        }
      }
    };

    const handleMouseUp = () => {
      setResizingColumn(null);
      setResizerPosition(null);
    };

    if (resizingColumn) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [resizingColumn, resizerPosition]);
  const [selectedCell, setSelectedCell] = useState<{
    rowId: string;
    columnId: string;
  } | null>(null);

  const [columns, setColumns] = useState<ColumnDef<dummy>[]>([]);
  useEffect(() => {
    setColumns(getInitialColumns(setColumns));
  }, []);
  const [data] = useState([...defaultData]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [selectedColumnId, setSelectedColumnId] = useState<string | null>(null);
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable<dummy>({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),

    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),

    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),

    columnResizeMode: "onChange",
  });

  const changeGlobalFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(e.target.value);
  };

  const [columnName] = useState("New Column");
  const [num, setNum] = useState(0);

  const addColumnfunc = () => {
    setNum((prev) => prev + 1);
    if (columnName.trim() === "") {
      alert("please name the column first!!!");
      return;
    }
    const newCol = {
      id: num.toString(),
      sortingFn: emptyAlwaysBottomSort,
      cell: () => (
        <div className="flex justify-center items-center w-full h-full"></div>
      ),
      header: () => (
        <div className="flex flex-row">
          <div className="px-2 py-1 rounded-md flex justify-center items-center whitespace-nowrap font-sans text-[10px] text-[#757575] font-bold">
            <span>{columnName}</span>
          </div>
        </div>
      ),
      size: 120,
    };

    setColumns([...columns, newCol]);
  };

  const sortColumnfunc = (e: React.SyntheticEvent) => {
    e.stopPropagation();

    if (!selectedColumnId) {
      alert("No column selected to sort.");
      return;
    }

    const existingSort = sorting.find((s) => s.id === selectedColumnId);
    let newSort: SortingState;

    if (!existingSort) {
      newSort = [{ id: selectedColumnId, desc: false }];
      alert(`Sorted ${selectedColumnId} Ascending`);
    } else if (!existingSort.desc) {
      newSort = [{ id: selectedColumnId, desc: true }];
      alert(`Sorted ${selectedColumnId} Descending`);
    } else {
      newSort = [];
      alert(`Cleared sorting on ${selectedColumnId}`);
    }

    setSorting(newSort);
  };

  return (
    <>
      <div
        className="flex flex-col min-h-screen w-[full] overflow-x-auto"
        onClick={() => setSelectedCell(null)}
      >
        <div className="overflow-auto bg-white shadow-md rounded-md">
          <TopBar
            handlerFunction={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeGlobalFilter(e)
            }
          />
          <ToolBar
            sortHandlerFunc={sortColumnfunc}
            columnHandlerFunc={addColumnfunc}
          />
          <div className="relative">
            <GroupHeader />
            <table className="w-full table-fixed divide-y divide-gray-200 border-separate border-spacing-x-0.25">
              <thead className="bg-gray-200">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        style={{
                          width: header.column.getSize(),
                        }}
                        key={header.id}
                        onClick={() => {
                          console.log(`"${header.column.id}" Column Selected`);
                          setSelectedColumnId(header.column.id);
                        }}
                        tabIndex={0}
                        className={`border border-transparent focus:border-blue-500 hover:border-blue-500 transition-colors h-[20px] px-2 text-left text-xs text-gray-500 font-medium uppercase tracking-wider whitespace-normal break-words cursor-pointer ${
                          header.column.id === "priority"
                            ? "bg-[#e2daf7]"
                            : header.column.id === "dueDate"
                            ? "bg-[#e2daf7]"
                            : header.column.id === "estValue"
                            ? "bg-[#ffe3d7]"
                            : header.column.id === "assigned"
                            ? "bg-[#cfe5d2]"
                            : header.column.id === "add"
                            ? "border-x-2 border-dashed border-gray-300 bg-gray-100 text-3xl font-light text-center"
                            : ""
                        }`}
                      >
                        <div className="relative">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}

                          <div
                            onMouseDown={header.getResizeHandler()}
                            onTouchStart={header.getResizeHandler()}
                            className={`absolute opacity-0 bottom-0 -top-4 -right-4  h-13 w-1 bg-[#ff2e2e] cursor-col-resize border rounded-md hover:opacity-100 ${
                              header.column.getIsResizing() ? "isResizing" : ""
                            }`}
                          ></div>
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        onClick={(e) => {
                          console.log(
                            `Cell (${cell.column.id} , ${Number(row.id) + 1} )`
                          );
                          const isSame =
                            selectedCell?.rowId === row.id &&
                            selectedCell?.columnId === cell.column.id;

                          setSelectedCell(
                            isSame
                              ? null
                              : { rowId: row.id, columnId: cell.column.id }
                          );

                          e.stopPropagation();
                        }}
                        key={cell.id}
                        className={`px-4 h-[35px] whitespace-nowrap text-sm text-gray-700 transition-colors
                          ${
                            cell.column.id === "add"
                              ? "border-l-2 border-r-2 border-dashed border-gray-300"
                              : "border border-gray-200"
                          }
                          ${
                            selectedCell?.rowId === row.id &&
                            selectedCell?.columnId === cell.column.id
                              ? "border-green-500 bg-gray-100"
                              : "hover:border-green-500"
                          }
                        `}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
