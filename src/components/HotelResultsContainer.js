import FilteredResultsContainer from "./FilteredResultsContainer";
import BedInQuadCard from "./BedInQuadCard";
import "./HotelResultsContainer.css";

const HotelResultsContainer = () => {
  return (
    <div className="hotel-results">
      <div className="results-sumamry">
        <div className="results1">200+ results</div>
        <div className="filters">
          <div className="filters1">Filters</div>
          <img className="filters-icon1" alt="" src="/filters@2x.png" />
        </div>
      </div>
      <div className="results-section1">
        <div className="result-cards-col">
          <FilteredResultsContainer
            resultsImage="/results-image@2x.png"
            kingBedStandard="1 king bed standard"
            holidayInnExpre="Holiday Inn Expre..."
            vector="/vector@2x.png"
            video="/video@2x.png"
          />
          <BedInQuadCard
            resultsImage="/results-image@2x.png"
            bedInQuad="Bed in Quad"
            freehandLosAngeles="Freehand Los Angeles"
            vector="/vector@2x.png"
            prop="4.2"
            reviews="(1,941 reviews)"
            s198="$S 198"
          />
          <BedInQuadCard
            resultsImage="/results-image@2x.png"
            bedInQuad="1 King, City view"
            freehandLosAngeles="The Westin Bonavent..."
            vector="/vector@2x.png"
            prop="4.1"
            reviews="(1,002 reviews)"
            s198="$S 289"
          />
          <FilteredResultsContainer
            resultsImage="/results-image@2x.png"
            kingBedStandard="Deluxe King"
            holidayInnExpre="The Ritz-Carlton, L..."
            vector="/vector@2x.png"
            video="/feature-video@2x.png"
            propCursor="pointer"
          />
          <iframe
            className="map"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
        <iframe
          className="map1"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
        />
      </div>
    </div>
  );
};

export default HotelResultsContainer;
