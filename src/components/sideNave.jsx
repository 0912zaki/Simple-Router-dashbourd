import { useState } from "react"
import SideNavList from "./sideNaveList"
import { NavLink } from "react-router-dom"
import Hero from "./hero"

const SideNav = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(true)
    }

    const handleIsClose = () => {
        setIsOpen(false)
    }

    return <>

        <div style={{ width: isOpen === true ? "8%" : "" }} className="bg-green-500 w-[22%] h-screen fixed transition-all duration-700">
            <Hero/>

            <i style={{ display: isOpen === true ? "none" : "" }} onClick={handleIsOpen} className="fa-solid fa-bars text-4xl text-white absolute right-2 top-1"></i>
            <i onClick={handleIsClose} style={{ display: isOpen === true ? "block" : "none" }} className="fa-solid fa-x text-4xl text-white pl-2 pt-1 hidden"></i>

            <div className="pt-32">

                <NavLink to="/"> <SideNavList icon="fa-box" title="Dashboard" /> </NavLink>
                <NavLink to="/Student"> <SideNavList icon="fa-users" title="Students" /> </NavLink>
                <NavLink to="/Teacher"> <SideNavList icon="fa-user" title="Teacher" />  </NavLink> 
            </div>
        </div>
        
        <div style={{marginLeft: isOpen === true ? "12%" : ""}} className="ml-[28%] transition-all duration-700">
            {children}
        </div>

    </>
}

export default SideNav