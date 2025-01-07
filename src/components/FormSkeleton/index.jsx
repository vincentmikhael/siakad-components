import {twMerge} from "tailwind-merge";

const FormSkeleton = ({count, className, cols} = 2) => {
    return (
        <div className={`grid grid-cols-${cols} gap-6 flex-grow`}>
            {Array.from({length: count}).map((_, index) => (
                <div key={index} className={twMerge("skeleton skeleton-box h-12", className)}></div>
            ))}
        </div>
    )
}
export default FormSkeleton