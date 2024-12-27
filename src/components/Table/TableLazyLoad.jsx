import {twMerge} from "tailwind-merge";

const TableLazyLoad = ({columns}) => {
    return (
        <div className="overflow-x-auto rounded-xl">
            <table className="min-w-full bg-white">
                <thead className="text-[13px] rounded-lg">
                <tr className="bg-fade text-black text-left">
                    {columns.map((e, index) => {
                        return (
                            <th
                                className={
                                    twMerge(`bg-fade uppercase px-4 py-3`,
                                        e.className)}
                                key={index}
                            >
                                {e.name}
                            </th>
                        );
                    })}
                </tr>
                </thead>
                <tbody>
                {Array(5).fill(null).map((_, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((col, colIndex) => (
                            <td className="p-4 whitespace-nowrap" key={colIndex}>
                                <div className="h-3 bg-fade rounded w-full animate-pulse"></div>
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}
export default TableLazyLoad