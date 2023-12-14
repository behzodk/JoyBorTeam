import { useState, useMemo, useCallback } from "react";
import MatterhornPopup from "./MatterhornPopup";
import PortalPopup from "./PortalPopup";
import "./HotelCardForm1.css";

const HotelCardForm1 = ({
  imageDimensions,
  accommodationType,
  accommodationImageUrl,
  pricePerNight,
  reviewCount,
  rating,
  roomSizeDimensions,
  propFlex,
  propGap,
  propWidth,
  propRight,
  propBorder,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const stayDetailsStyle = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const moreDetailsButtonStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className="hotel-card-1">
        <div className="hotel-card">
          <img
            className="matterhorn-suites-image"
            alt=""
            src={imageDimensions}
          />
          <div className="stay-details" style={stayDetailsStyle}>
            <div className="stay-details-rows">
              <div className="entire-bungalow">{accommodationType}</div>
              <b className="matterhorn-suites">{accommodationImageUrl}</b>
              <div className="night2">{pricePerNight}</div>
            </div>
            <img
              className="video-icon3"
              alt=""
              src="/video@2x.png"
              onClick={openMatterhornPopup}
            />
          </div>
          <div className="rating">
            <div className="reviews2">{reviewCount}</div>
            <div className="parent">
              <div className="div10">{rating}</div>
              <img
                className="vector-icon3"
                alt=""
                src={roomSizeDimensions}
                style={vectorIconStyle}
              />
            </div>
          </div>
          <button
            className="more-details-button"
            style={moreDetailsButtonStyle}
          >
            <div className="button8">More details</div>
          </button>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelCardForm1;
