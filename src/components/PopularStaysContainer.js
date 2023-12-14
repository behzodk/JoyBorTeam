import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelCardForm1 from "./HotelCardForm1";
import "./PopularStaysContainer.css";

const PopularStaysContainer = () => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className="popular-stays">
      <div className="popular-stays-header">
        <div className="popular-stays-title">
          <b className="popular-stays1">Popular Stays</b>
        </div>
        <button
          className="view-all-stays-button"
          onClick={onViewAllStaysButtonClick}
        >
          <div className="view-all-stays">View all stays</div>
          <img className="arrow-right-icon4" alt="" src="/arrowright@2x.png" />
        </button>
      </div>
      <div className="hotel-cards">
        <HotelCardForm1
          imageDimensions="/matterhorn-suites-image@2x.png"
          accommodationType="Entire bungalow"
          accommodationImageUrl="Matterhorn Suites"
          pricePerNight="$575/night"
          reviewCount="(60 reviews)"
          rating="4.9"
          roomSizeDimensions="/vector@2x.png"
          propGap="11px"
          propWidth="37.47%"
          propRight="62.53%"
          propBorder="1px solid var(--color-lavender-100)"
        />
        <HotelCardForm1
          imageDimensions="/discovery-shores-image@2x.png"
          accommodationType="2-Story beachfront suite"
          accommodationImageUrl="Discovery Shores"
          pricePerNight="$360/night"
          reviewCount="(116 reviews)"
          rating="4.8"
          roomSizeDimensions="/vector@2x.png"
          propFlex="1"
          propGap="11px"
          propWidth="37.47%"
          propRight="62.53%"
          propBorder="1px solid var(--color-lavender-200)"
        />
        <HotelCardForm1
          imageDimensions="/arctic-hut-image@2x.png"
          accommodationType="Single deluxe hut"
          accommodationImageUrl="Arctic Hut "
          pricePerNight="$420/night"
          reviewCount="(78 reviews)"
          rating="4.7"
          roomSizeDimensions="/vector@2x.png"
          propFlex="1"
          propGap="5px"
          propWidth="37.61%"
          propRight="62.39%"
          propBorder="1px solid var(--color-lavender-200)"
        />
        <HotelCardForm1
          imageDimensions="/lake-louise-image@2x.png"
          accommodationType="Deluxe King Room"
          accommodationImageUrl="Lake Louise Inn"
          pricePerNight="$244/night"
          reviewCount="(63 reviews)"
          rating="4.6"
          roomSizeDimensions="/vector@2x.png"
          propFlex="unset"
          propGap="11px"
          propWidth="37.47%"
          propRight="62.53%"
          propBorder="1px solid var(--color-lavender-100)"
        />
      </div>
      <div className="mobile-view-all-stays">
        <div className="view-all-stays1">View all stays</div>
        <img className="arrow-right-icon4" alt="" src="/arrowright@2x.png" />
      </div>
    </div>
  );
};

export default PopularStaysContainer;
