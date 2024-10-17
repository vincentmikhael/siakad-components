import {
  CaretLeft,
  CaretRight,
  PencilSimpleLine,
  Trash,
} from "@phosphor-icons/react/dist/ssr";
import { Button, Checkbox } from "..";
const Table = ({ columns, data,...props }) => {
  return (
    <div>
    <div className="overflow-x-auto">
      <table className=" w-full mt-8 bg-white border border-gray-300 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-zinc-100 text-white">
            <td className="py-2 px-4 border-b text-black font-medium"></td>
            {columns.map((column) => (
              <td
                className="py-2 px-4 border-b text-black font-medium"
                key={column.accessor}
              >
                {column.header}
              </td>
            ))}
            <td className="py-2 px-4 border-b text-black font-medium">
              Actions
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr className="hover:bg-zinc-200 border-b" key={row.id}>
              <td className="py-2 px-4">
                <Checkbox />
              </td>
              {columns.map((column) => (
                <td className="py-2 px-4 text-black" key={column.accessor}>
                  {row[column.accessor]}
                </td>
              ))}
              <td className="py-2 px-4 gap-3 flex">
                <div className="bg-orange-100 p-2 text-orange-500 border rounded-lg border-orange-300">
                  <PencilSimpleLine onClick={props.onEdit} />
                </div>
                <div className="bg-red-100 p-2 text-red-500 border rounded-lg border-red-300">
                  <Trash onClick={props.onDelete} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <nav aria-label="Pagination" className="flex items-center w-full">
          <div className="flex-1 flex justify-start">
            <Button variant="white" leftIcon={<CaretLeft />}>
              Previous
            </Button>
          </div>
          <div className="flex-1 flex justify-center gap-3">
            <Button variant="white">1</Button>
            <Button variant="white" className={"border-0"}>
              2
            </Button>
            <Button variant="white" className={"border-0"}>
              3
            </Button>
          </div>
          <div className="flex-1 flex justify-end">
            <Button variant="white" rightIcon={<CaretRight />}>
              Next
            </Button>
          </div>
        </nav>
      </div>
      </div>
  );
};

export default Table;
