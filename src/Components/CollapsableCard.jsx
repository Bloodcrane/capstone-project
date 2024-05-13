const CollapsableCard = ({ id, title = "More Info", image, textUpper = "Example Upper", textMiddle = "Example Middle", textLower = "Example Lower"}) => {
    return (
        <div className="wrap-collabsible">
            <input id={`collapsible-${id}`} className="toggle" type="checkbox" />
            <label htmlFor={`collapsible-${id}`} className="lbl-toggle">{title}</label>
            <div className="collapsible-content">
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
