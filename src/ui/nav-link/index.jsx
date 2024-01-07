import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";
import './nav-link.css'

const NavLink = ({ link, children }) => {
    const navLinkClasses = ({ isActive }) => {
        return isActive ? "nav-link nav-link-active" : "nav-link"
    };
    return (
        <Link className={navLinkClasses} to={link}>
            <span className="icon"></span>
            <span>
                {children}
            </span>
        </Link>
    )
}

NavLink.propTypes = {
    link: PropTypes.string,
    children: PropTypes.string,
}

export default NavLink;