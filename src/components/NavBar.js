import { IoIosHome, IoIosSettings, IoIosPerson } from "react-icons/io"
import NavElement from "./NavElement"

function NavBar() {

    return (
        <div className="navbar">
            <ul>
                <NavElement {...{icon: <IoIosHome />, name: "Home"}} />
                <NavElement {...{icon: <IoIosSettings />, name: "Settings"}}/>
                <NavElement {...{icon: <IoIosPerson/>, name: "About"}}/>
            </ul>
        </div>
    );
}

export default NavBar