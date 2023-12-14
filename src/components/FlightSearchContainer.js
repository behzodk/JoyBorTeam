import "./FlightSearchContainer.css";

const FlightSearchContainer = ({ sIN, duration, lAX, departOn, sep2021 }) => {
  return (
    <div className="flight-main-container">
      <div className="to-and-from">
        <div className="from-details">
          <b className="sin2">{sIN}</b>
        </div>
        <img className="duration-icon" alt="" src={duration} />
        <div className="to-details">
          <b className="lax">{lAX}</b>
        </div>
      </div>
      <div className="depart-on-7-container">
        <b>{departOn}</b>
        <span>{sep2021}</span>
      </div>
    </div>
  );
};

export default FlightSearchContainer;
