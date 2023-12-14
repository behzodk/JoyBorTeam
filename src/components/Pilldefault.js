import { useMemo } from "react";
import "./Pilldefault.css";

const Pilldefault = ({
  beds,
  pilldefaultBackgroundColor,
  pilldefaultFlexShrink,
  bedsColor,
}) => {
  const pilldefaultStyle = useMemo(() => {
    return {
      backgroundColor: pilldefaultBackgroundColor,
      flexShrink: pilldefaultFlexShrink,
    };
  }, [pilldefaultBackgroundColor, pilldefaultFlexShrink]);

  const bedsStyle = useMemo(() => {
    return {
      color: bedsColor,
    };
  }, [bedsColor]);

  return (
    <div className="pilldefault" style={pilldefaultStyle}>
      <div className="beds" style={bedsStyle}>
        {beds}
      </div>
    </div>
  );
};

export default Pilldefault;
