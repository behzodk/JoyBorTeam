import { useMemo } from "react";
import PrimaryButton from "./PrimaryButton";
import "./FilteredResultsContainer.css";

const FilteredResultsContainer = ({
  resultsImage,
  kingBedStandard,
  holidayInnExpre,
  vector,
  video,
  propCursor,
}) => {
  const videoIconStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className="results-card">
      <img className="results-image-icon" alt="" src={resultsImage} />
      <div className="results-details">
        <div className="results-title">
          <div className="result-and-video">
            <div className="king-bed-standard">{kingBedStandard}</div>
            <b className="holiday-inn-expre">{holidayInnExpre}</b>
            <div className="review">
              <div className="stars">
                <img className="vector-icon1" alt="" src={vector} />
                <div className="div6">4.7</div>
              </div>
              <div className="reviews">(1,136 reviews)</div>
            </div>
          </div>
          <img
            className="video-icon2"
            alt=""
            src={video}
            style={videoIconStyle}
          />
        </div>
        <div className="price-and-cta">
          <div className="pricing">
            <b className="s-286">$S 286</b>
            <div className="night">/night</div>
          </div>
          <PrimaryButton
            searchFlights="View Details"
            primaryButtonWidth="164px"
            primaryButtonHeight="46px"
            primaryButtonCursor="pointer"
            primaryButtonBorder="none"
            primaryButtonPadding="0"
            primaryButtonBackgroundColor="transparent"
            primaryButtonPosition="relative"
            rectangleDivBackgroundColor="#1262af"
            searchFlightsLeft="calc(50% - 54.5px)"
            searchFlightsDisplay="inline-block"
          />
        </div>
      </div>
    </div>
  );
};

export default FilteredResultsContainer;
