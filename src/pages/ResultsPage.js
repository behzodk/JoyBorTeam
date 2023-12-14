import SearchFormContainer from "../components/SearchFormContainer";
import SearchFilterContainer from "../components/SearchFilterContainer";
import FlightContainer from "../components/FlightContainer";
import BookingCardContainer from "../components/BookingCardContainer";
import SubscriptionContainer from "../components/SubscriptionContainer";
import "./ResultsPage.css";

const ResultsPage = () => {

  return (
    <div className="results-page">
      <SearchFormContainer />
      <div className="search-results">
        <SearchFilterContainer />
        <div className="results-section">
          <FlightContainer />
          <div className="recently-booked">
            <div className="recently-booked-title">
              <b className="results">Recently booked</b>
              <img
                className="recently-booked-title-child"
                alt=""
                src="/vector-2@2x.png"
              />
            </div>
            <div className="booking-cards">
              <BookingCardContainer
                airlineLogo="/icon.svg"
                singaporeAirlines="Singapore Airlines"
                price="$1128"
                depCode="SIN"
                depName="Singapore"
                arrCode="LAX"
                arrName="Los Angeles"
                flightClass="Economy"
                numPeople="2 Adults"
                expedia="Expedia"
                timeAgo="1s ago!"
                propTextAlign="right"
              />
              <BookingCardContainer
                airlineLogo="/icon1.svg"
                singaporeAirlines="American Airlines"
                price="$1024"
                depCode="SFO"
                depName="San Francisco"
                arrCode="SIN"
                arrName="Singapore"
                flightClass="First Class"
                numPeople="1 Adults"
                expedia="Kayak"
                timeAgo="2s ago!"
                propTextAlign="right"
              />
              <BookingCardContainer
                airlineLogo="/icon2.svg"
                singaporeAirlines="Japan Airlines"
                price="$2996"
                depCode="PHX"
                depName="Phoenix"
                arrCode="DXB"
                arrName="Dubai"
                flightClass="Economy"
                numPeople="3 Adults"
                expedia="Skyscanner"
                timeAgo="3s ago!"
                propTextAlign="left"
              />
              <div className="show-more">
                <div className="show-more1">Show more</div>
                <img className="icon-back" alt="" src="/icon--back@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscriptionContainer />
    </div>
  );
};

export default ResultsPage;
