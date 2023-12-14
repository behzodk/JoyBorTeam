import { useMemo } from "react";
import "./Arrow.css";

const Arrow = ({ arrowDropDown, arrowFlexShrink }) => {
  const arrowStyle = useMemo(() => {
    return {
      flexShrink: arrowFlexShrink,
    };
  }, [arrowFlexShrink]);

  return (
    <div className="arrow" style={arrowStyle}>
      <img className="arrowdropdown-icon" alt="" src={arrowDropDown} />
    </div>
  );
};

export default Arrow;
