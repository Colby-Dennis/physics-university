import { IoIosHome, IoIosSettings, IoIosPerson } from "react-icons/io"

function NavBar() {
    function handleClick() {
        console.log("You clicked home")
    }

    return (
        <div className="navbar">
            <ul>
                <li onClick={handleClick}>
                    <span className="navIcon"><IoIosHome /></span>
                    <span className="navName">Home</span>
                </li>
                <li>
                    <span className="navIcon"><IoIosSettings /></span>
                    <span className="navName">Settings</span>
                </li>
                <li>
                    <span className="navIcon"><IoIosPerson /></span>
                    <span className="navName">About</span>
                </li>

            </ul>
        </div>
    );
}

export default NavBar