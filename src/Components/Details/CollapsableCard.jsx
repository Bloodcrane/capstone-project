import React from 'react';

const CollapsableCard = ({ id, title = "More Info", image, textUpper = "Example Upper", textMiddle = "Example Middle", textLower = "Example Lower", isOpen, handleToggle }) => {
    return (
        <div className="wrap-collapsable">
            <input id={`collapsible-${id}`} className="toggle" type="checkbox" checked={isOpen} readOnly />
            <label htmlFor={`collapsible-${id}`} className="lbl-toggle" onClick={() => handleToggle(id)}>{title}</label>
            <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
                <div className="content-inner">
                    <img src={image} alt='' className="content-image"></img>
                    <p>{textUpper}</p>
                    <p>{textMiddle}</p>
                    <p>{textLower}</p>
                </div>
            </div>
        </div>
    );
}

export default CollapsableCard;
