export default function NavButton({children, onClick, icon, active, ...props} = {
    active:true, icon: undefined
}) {
    return <button {...props}
                   onClick={onClick}
                   className={`text-sm font-normal rounded-lg flex justify-between p-3 gap-2 items-center w-full ${
                       active
                           ? "bg-primary-100 text-gray-10"
                           : "bg-gray-20 text-gray-70"
                   }`}
    >
        {children}
        {icon && <span className="text-base">{icon}</span>}
    </button>
}