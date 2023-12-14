import { useMemo } from "react";
import "./BookingCardContainer.css";

const BookingCardContainer = ({
  airlineLogo,
  singaporeAirlines,
  price,
  depCode,
  depName,
  arrCode,
  arrName,
  flightClass,
  numPeople,
  expedia,
  timeAgo,
  propTextAlign,
}) => {
  const arrNameStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className="booking-card">
      <div className="airline-price">
        <div className="airline">
          <img className="airlinelogo-icon" alt="" src={airlineLogo} />
          <div className="flightclass">{singaporeAirlines}</div>
        </div>
        <div className="price">{price}</div>
      </div>
      <div className="locations">
        <div className="departure">
          <div className="depcode">{depCode}</div>
          <div className="depname">{depName}</div>
        </div>
        <img className="flight-icon" alt="" src="/flight-icon@2x.png" />
        <div className="arrival">
          <div className="depcode">{arrCode}</div>
          <div className="arrname" style={arrNameStyle}>
            {arrName}
          </div>
        </div>
      </div>
      <div className="details">
        <div className="class">
          <img className="class-icon" alt="" src="/class-icon@2x.png" />
          <div className="flightclass">{flightClass}</div>
        </div>
        <div className="class">
          <img className="class-icon" alt="" src="/calender@2x.png" />
          <div className="flightclass">{numPeople}</div>
        </div>
      </div>
      <div className="provider">
        <div className="flightclass">
          <span>{`Booked on `}</span>
          <span className="expedia">{expedia}</span>
        </div>
        <div className="timeago">{timeAgo}</div>
      </div>
    </div>
  );
};

export default BookingCardContainer;
