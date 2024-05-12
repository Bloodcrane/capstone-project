import "../Styles/RoomSection.css"

const Card = ({Image = "https://via.placeholder.com/260x270", Price = "$59", Area = "20m²"}) => {
    return (
    <div className="room-card">
        <img className="room-image" src={Image} alt="RoomImage" />
          <div className="room-details">
            <div className="room-info">
              <div className="room-type">Double Room</div>
              <div className="price">
                <span className="starting-from">Starting from</span>
                <span className="price-value">{Price}</span>
                <div className="price-toggle">
                <label class="switch">
                  <input type="checkbox"></input>
                  <span class="slider round"></span>
                </label>
              </div>
              </div>
            </div>
            <div className="room-amenities">
              <div className="guests">
              </div>
              <div className="area">
                <span>{Area}</span>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Card