/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import '../dashboard.css'

const Dashboard = ({ text }) => {
    return (
        <div className='dashboard'>
            <h1 className="header">{text}</h1>
            <div className="info-container">
                <div className="info info1">INFO READABOUT 1</div>
                <div className="info info2">INFO READABOUT 2</div>
                <div className="info info3">INFO READABOUT 3</div>
            </div>
        </div>
    )
}

Dashboard.propTypes = {
    text: PropTypes.string,
}

export default Dashboard
