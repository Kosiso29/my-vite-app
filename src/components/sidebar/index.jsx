import "./sidebar.css"
import NavLink from "../../ui/nav-link";
import { Link } from "react-router-dom";
import TitanLogo from "../../assets/titan-reign-logo.jpeg";
import UserIcon from "../../assets/user-icon.jpeg";

const sidebarData = [
    { name: "DASHBOARD", link: "/dashboard" },
    { name: "AVATARS", link: "/avatars" },
    { name: "TORCHES", link: "/torches" },
    { name: "CRAFTING", link: "/crafting" },
    { name: "FORGES", link: "/forges" },
    { name: "TOURNAMENTS", link: "/tournaments" },
]

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={TitanLogo} alt="titan-logo" height="100" width="100" />
            </div>
            <hr />
            <div className="user-icon">
                <img src={UserIcon} alt="user-icon" height="100" width="100" />
                <span>TITAN ACCOUNT</span>
            </div>
            <div className="sidebar-links">
                {
                    sidebarData.map(data => (
                        <NavLink link={data.link} key={data.name}>{ data.name }</NavLink>
                    ))
                }
            </div>
            <div className="logout">
                <Link to="/" className="logout-link">LOGOUT</Link>
            </div>
        </div>
    )
}

export default Sidebar;