import Header from "../components/Header";
import Pilldefault from "../components/Pilldefault";
import HotelResultsContainer from "../components/HotelResultsContainer";
import NewsletterContainer from "../components/NewsletterContainer";
import "./HotelsPage.css";

const HotelsPage = () => {
  return (
    <div className="hotels-page">
      <div className="header">
        <div className="banner">
          <div className="title">
            <div className="stays-in-los">Stays in Los Angeles</div>
            <div className="options">
              <Pilldefault
                beds="Recommended"
                pilldefaultBackgroundColor="#fff"
                pilldefaultFlexShrink="0"
                bedsColor="#1262af"
              />
              <Pilldefault
                beds="Price"
                pilldefaultBackgroundColor="unset"
                pilldefaultFlexShrink="0"
                bedsColor="#fff"
              />
              <Pilldefault
                beds="Rating"
                pilldefaultBackgroundColor="unset"
                pilldefaultFlexShrink="0"
                bedsColor="#fff"
              />
            </div>
          </div>
        </div>
      </div>
      <HotelResultsContainer />
      <NewsletterContainer />
    </div>
  );
};

export default HotelsPage;
