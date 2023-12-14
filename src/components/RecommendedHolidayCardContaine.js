import "./RecommendedHolidayCardContaine.css";

const RecommendedHolidayCardContaine = ({
  packageName,
  packageDestination,
  packageDuration,
  packagePrice,
}) => {
  return (
    <button className="rec-card-1">
      <img className="unsplash5mv818tzxeo-icon" alt="" src={packageName} />
      <div className="holiday-details">
        <div className="frame-parent">
          <div className="bali-parent">
            <div className="bali">{packageDestination}</div>
            <div className="d3n">{packageDuration}</div>
          </div>
          <div className="div9">{packagePrice}</div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedHolidayCardContaine;
