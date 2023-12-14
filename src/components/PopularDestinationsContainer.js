import DestinationContainer from "./DestinationContainer";
import "./PopularDestinationsContainer.css";

const PopularDestinationsContainer = () => {
  return (
    <div className="pop-destinations-main">
      <div className="destinations-titles">
        <div className="title-container">
          <b className="plan-your-next">Plan your next trip</b>
          <b className="most-popular-destinations">Most Popular Destinations</b>
        </div>
        <button className="view-all-top">
          <div className="view-all-destinations">View all destinations</div>
          <img className="arrow-right-icon" alt="" src="/arrowright@2x.png" />
        </button>
      </div>
      <div className="cards-container">
        <DestinationContainer
          destinationPrice="/parisimage@2x.png"
          destinationName="Paris"
          destinationPriceRange="$699"
          propWidth="90.9px"
          propDisplay="inline-block"
          propWidth1="90.9px"
          propLeft="38.4px"
        />
        <DestinationContainer
          destinationPrice="/greeceimage@2x.png"
          destinationName="Greece"
          destinationPriceRange="$1079"
          propWidth="99.9px"
          propDisplay="inline-block"
          propWidth1="unset"
          propLeft="47.4px"
        />
        <DestinationContainer
          destinationPrice="/norwayimage@2x.png"
          destinationName="Norway"
          destinationPriceRange="$895"
          propWidth="90.9px"
          propDisplay="inline-block"
          propWidth1="90.9px"
          propLeft="38.4px"
        />
        <DestinationContainer
          destinationPrice="/tuscanyimage@2x.png"
          destinationName="Tuscany"
          destinationPriceRange="$1245"
          propWidth="100.6px"
          propDisplay="inline-block"
          propWidth1="100.6px"
          propLeft="48.1px"
        />
      </div>
      <div className="view-all-bottom">
        <div className="view-all-destinations1">View all destinations</div>
        <img className="arrow-right-icon" alt="" src="/arrowright@2x.png" />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
