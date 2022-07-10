import "./NavElement.css"

function NavElement(props) {
    return (
        <li>
            <span className="navName">{props.name}</span>
            <span className="navIcon">{props.icon}</span>
        </li>
    );
}

export default NavElement