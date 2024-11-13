export default function NavButton({children,
                                      className = "bg-primary-100 text-gray-10",
                                      classNameDisabled = "bg-gray-20 text-gray-70 cursor-not-allowed",
                                      onClick,
                                      icon,
                                      active,
                                      ...props
                                  } = {
    className: "bg-primary-100 text-gray-10",
    classNameDisabled: "bg-gray-20 text-gray-70 cursor-not-allowed",
    active:true, icon: undefined
}) {
    return <button {...props}
                   onClick={onClick}
                   className={`text-sm font-normal rounded-lg flex justify-between p-3 gap-2 items-center w-full ${
                       active ? className : classNameDisabled
                   }`}
    >
        {children}
        {icon && <span className="text-base">{icon}</span>}
    </button>
}