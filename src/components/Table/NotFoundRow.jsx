import {twMerge} from "tailwind-merge";

const NotFoundRow = ({colSpan, className, text = "Data tidak ditemukan", ...props}) => {
    return (
        <tr>
            <td colSpan={colSpan} className={twMerge("p-4 text-center text-gray-40", className)} {...props}>
                {text}
            </td>
        </tr>
    )
}
export default NotFoundRow