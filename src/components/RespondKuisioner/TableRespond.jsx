"use client"

const TableRespond = ({data}) => {
    return (
        <div
            className="relative rounded-xl border border-fade overflow-hidden shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
            <table className="w-full text-xs text-gray-90 font-medium">
                <tbody className="divide-y divide-fade">
                {data.map((item, index) => (
                    <tr className="odd:bg-white even:bg-fade" key={index}>
                        <td className="p-4">
                            {item}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}
export default TableRespond