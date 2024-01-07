/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import './topbar.css'

const Topbar = ({ text }) => {

    return (
        <div className='topbar'>
            {text}
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

Topbar.propTypes = {
    text: PropTypes.string,
}

export default Topbar
