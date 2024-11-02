const TableLazyLoad = () =>{
    return (
        <div className="overflow-x-auto mt-8 rounded-xl">
    <table className="min-w-full bg-white">
        <thead>
            <tr>
                <th className="px-6 py-3 border-b-2 bg-zinc-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <div className="h-4 bg-zinc-100 rounded w-full animate-pulse"></div>
                </th>
                <th className="px-6 py-3 border-b-2 bg-zinc-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <div className="h-4 bg-zinc-100 rounded w-full animate-pulse"></div>
                </th>
                <th className="px-6 py-3 border-b-2 bg-zinc-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    <div className="h-4 bg-zinc-100 rounded w-full animate-pulse"></div>
                </th>
            </tr>
        </thead>
        <tbody>

            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-zinc-200 rounded w-full animate-pulse"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-zinc-200 rounded w-full animate-pulse"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-zinc-200 rounded w-full animate-pulse"></div>
                </td>
            </tr>

            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-zinc-200 rounded w-full animate-pulse"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-zinc-200 rounded w-full animate-pulse"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-zinc-200 rounded w-full animate-pulse"></div>
                </td>
            </tr>
    
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-zinc-200 rounded w-full animate-pulse"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-zinc-200 rounded w-full animate-pulse"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="h-3 bg-zinc-200 rounded w-full animate-pulse"></div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

    )
}
export default TableLazyLoad