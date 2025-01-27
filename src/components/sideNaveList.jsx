const SideNavList = (props) => {
    return <div className="flex  text-white gap-4 pl-12 pt-10 text-4xl font-semibold">
            <i className={`fa-solid ${props.icon}`}></i>
            <h1>{props.title}</h1>
    </div>
}

export default SideNavList;