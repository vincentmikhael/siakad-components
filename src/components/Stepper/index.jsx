import { twMerge } from "tailwind-merge"

const Stepper = ({children,isActive,className}) => {

    return (
        <div className={twMerge((isActive ? 'block' : 'hidden'),className)}>
            {children}
        </div>
    )
}

export default Stepper