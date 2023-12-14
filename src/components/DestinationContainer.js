import { useMemo } from "react";
import "./DestinationContainer.css";

const DestinationContainer = ({
  destinationPrice,
  destinationName,
  destinationPriceRange,
  propWidth,
  propDisplay,
  propWidth1,
  propLeft,
}) => {
  const detailsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth1,
    };
  }, [propDisplay, propWidth1]);

  const fromStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className="col-1">
      <div className="pariscard">
        <img className="parisimage-icon" alt="" src={destinationPrice} />
        <div className="destination-details">
          <b className="paris">{destinationName}</b>
          <div className="details1" style={detailsStyle}>
            <div className="div8" style={divStyle}>
              {destinationPriceRange}
            </div>
            <div className="from" style={fromStyle}>
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default DestinationContainer;
