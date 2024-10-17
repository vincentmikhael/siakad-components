const Stepper = ({title,children,isActive}) => {

    return (
        <div className={isActive ? 'block' : 'hidden'}>
            {children}
        </div>
    )
}

export default Stepper