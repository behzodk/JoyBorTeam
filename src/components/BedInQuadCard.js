import PrimaryButton from "./PrimaryButton";
import "./BedInQuadCard.css";

const BedInQuadCard = ({
  resultsImage,
  bedInQuad,
  freehandLosAngeles,
  vector,
  prop,
  reviews,
  s198,
}) => {
  return (
    <div className="results-card1">
      <img className="results-image-icon1" alt="" src={resultsImage} />
      <div className="results-details1">
        <div className="results-title1">
          <div className="result">
            <div className="bed-in-quad">{bedInQuad}</div>
            <b className="freehand-los-angeles">{freehandLosAngeles}</b>
            <div className="review1">
              <div className="stars1">
                <img className="vector-icon2" alt="" src={vector} />
                <div className="div7">{prop}</div>
              </div>
              <div className="reviews1">{reviews}</div>
            </div>
          </div>
        </div>
        <div className="price-and-cta1">
          <div className="pricing1">
            <b className="s-198">{s198}</b>
            <div className="night1">/night</div>
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

export default BedInQuadCard;
