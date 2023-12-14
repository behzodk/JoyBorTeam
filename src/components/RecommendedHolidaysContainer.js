import RecommendedHolidayCardContaine from "./RecommendedHolidayCardContaine";
import "./RecommendedHolidaysContainer.css";

const RecommendedHolidaysContainer = () => {
  return (
    <div className="recommended-holidays-container">
      <div className="rec-title">
        <b className="recommended-holidays">Recommended Holidays</b>
        <button className="view-all-holidays-parent">
          <div className="view-all-holidays">View all holidays</div>
          <img className="arrow-right-icon2" alt="" src="/arrowright@2x.png" />
        </button>
      </div>
      <div className="rec-cards-container">
        <RecommendedHolidayCardContaine
          packageName="/unsplash5mv818tzxeo@2x.png"
          packageDestination="Bali"
          packageDuration="4D3N"
          packagePrice="$899"
        />
        <RecommendedHolidayCardContaine
          packageName="/switzerlandimage@2x.png"
          packageDestination="Swiss"
          packageDuration="6D5N"
          packagePrice="$900"
        />
        <RecommendedHolidayCardContaine
          packageName="/boracayimage@2x.png"
          packageDestination="Boracay"
          packageDuration="5D4N"
          packagePrice="$699"
        />
        <RecommendedHolidayCardContaine
          packageName="/palawanimage@2x.png"
          packageDestination="Palawan"
          packageDuration="4D3N"
          packagePrice="$789"
        />
      </div>
      <div className="view-all-bottom1">
        <div className="view-all-holidays1">View all holidays</div>
        <img className="arrow-right-icon2" alt="" src="/arrowright@2x.png" />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
