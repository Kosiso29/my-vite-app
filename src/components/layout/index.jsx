/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import Sidebar from "../sidebar";
import Topbar from "../topbar";
import './layout.css'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Sidebar />
            <Topbar />
            { children }
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.string,
}

export default Layout
