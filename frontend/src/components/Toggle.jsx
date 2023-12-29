// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import "./Toggle.css";

const Toggle = ({ handleChange, isChecked }) => {
    return(
        <div className="toggle-container">
            <input type="checkbox" 
                   id="check" className="toggle" 
                   onChange={handleChange} 
                   checked={isChecked} 
                   aria-label="Toggle Light Mode"
            />
            <label htmlFor="check" ></label>
        </div>
    );
};

Toggle.propTypes = {handleChange: PropTypes.func.isRequired, isChecked: PropTypes.bool.isRequired,}

export default Toggle