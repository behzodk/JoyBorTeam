import HeroContainer from "../components/HeroContainer";
import RecentSearchesContainer from "../components/RecentSearchesContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysContainer from "../components/PopularStaysContainer";
import SubscribeContainer from "../components/SubscribeContainer";
import Footer1 from "../components/Footer1";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <HeroContainer />
      <div className="home-contents">
        <RecentSearchesContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysContainer />
      </div>
      <div className="footer-section">
        <SubscribeContainer />
        <Footer1 />
      </div>
    </div>
  );
};

export default Homepage;
