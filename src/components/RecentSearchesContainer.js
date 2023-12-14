import FlightSearchContainer from "./FlightSearchContainer";
import "./RecentSearchesContainer.css";

const RecentSearchesContainer = () => {
  return (
    <div className="upcoming-flight-section">
      <div className="upcoming-flight-section1">
        <b className="recent-searches">Recent Searches</b>
        <div className="flight-details">
          <div className="recent-searches1">
            <FlightSearchContainer
              sIN="SIN"
              duration="/duration@2x.png"
              lAX="LAX"
              departOn="Depart on: "
              sep2021="7 Sep 2021"
            />
            <FlightSearchContainer
              sIN="MY"
              duration="/duration@2x.png"
              lAX="DUB"
              departOn="Depart on:"
              sep2021=" 9 Sep 2021"
            />
          </div>
          <div className="prepare-menu">
            <div className="recent-searches">Prepare for your trip</div>
            <div className="trip-menus">
              <div className="hotel">
                <img className="hotel-icon" alt="" src="/hotel-icon@2x.png" />
                <div className="hotel1">Hotel</div>
              </div>
              <div className="attractions">
                <div className="attractions-icon">
                  <div className="background" />
                  <img className="ticket-icon" alt="" src="/ticket@2x.png" />
                </div>
                <div className="hotel1">Attractions</div>
              </div>
              <div className="attractions">
                <img className="hotel-icon" alt="" src="/eats-icon@2x.png" />
                <div className="hotel1">Eats</div>
              </div>
              <div className="attractions">
                <div className="attractions-icon">
                  <div className="background1" />
                  <img className="train-icon" alt="" src="/train@2x.png" />
                </div>
                <div className="hotel1">Commute</div>
              </div>
              <div className="attractions">
                <div className="taxi-icon">
                  <div className="background2" />
                  <img className="taxi-icon1" alt="" src="/taxi@2x.png" />
                </div>
                <div className="taxi1">Taxi</div>
              </div>
              <div className="attractions">
                <div className="attractions-icon">
                  <div className="background3" />
                  <img className="movie-icon" alt="" src="/movie@2x.png" />
                </div>
                <div className="hotel1">Movies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSearchesContainer;
