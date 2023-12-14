import { useMemo } from "react";
import "./FlightCard.css";

const FlightCard = ({
  flightDetails,
  airlineName,
  departureTime,
  flightDuration,
  flightTime,
  price,
  propTransform,
  propWidth,
}) => {
  const turkishIconStyle = useMemo(() => {
    return {
      transform: propTransform,
    };
  }, [propTransform]);

  const flightDurationStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="flight-card">
      <div className="airline-section">
        <img
          className="turkish-icon1"
          alt=""
          src={flightDetails}
          style={turkishIconStyle}
        />
        <div className="singapore-airlines">{airlineName}</div>
      </div>
      <div className="flight-details-section">
        <div className="departure-details">
          <div className="am">{departureTime}</div>
          <div className="sin">SIN</div>
        </div>
        <div className="flightduration" style={flightDurationStyle}>
          <img className="flighticon" alt="" src="/flighticon@2x.png" />
          <div className="h-55m-non-stop">{flightDuration}</div>
        </div>
        <div className="arrival-details">
          <div className="am1">{flightTime}</div>
          <div className="sin">LAX</div>
        </div>
      </div>
      <div className="price-section">
        <img className="price-section-child" alt="" src="/vector-1@2x.png" />
        <b className="s-730">{price}</b>
      </div>
    </div>
  );
};

export default FlightCard;
