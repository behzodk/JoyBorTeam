import { useMemo } from "react";
import "./TagContainer.css";

const TagContainer = ({
  taggingActionText,
  additionalTaggingActionTe,
  layersActionText,
  preTaggedLayersActionText,
  propLeft,
  propLeft1,
  propLeft2,
  propWidth,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const taggingStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const weveAlreadyPreTaggedStyle = useMemo(() => {
    return {
      left: propLeft2,
      width: propWidth,
    };
  }, [propLeft2, propWidth]);

  return (
    <div className="group-parent3" style={groupDivStyle}>
      <div className="rectangle-parent2">
        <div className="group-child57" />
        <div className="tagging" style={taggingStyle}>
          {taggingActionText}
        </div>
        <b className="b23">{additionalTaggingActionTe}</b>
        <b className="layers">{layersActionText}</b>
      </div>
      <div
        className="weve-already-pre-tagged"
        style={weveAlreadyPreTaggedStyle}
      >
        {preTaggedLayersActionText}
      </div>
    </div>
  );
};

export default TagContainer;
