import TagContainer from "./TagContainer";
import "./TaggingContainer.css";

const TaggingContainer = () => {
  return (
    <div className="group-parent4">
      <TagContainer
        taggingActionText="Tagging"
        additionalTaggingActionTe="3"
        layersActionText="Layers"
        preTaggedLayersActionText="(We’ve already pre-tagged 12 other layers for you)"
        propLeft="0px"
        propLeft1="179px"
        propLeft2="64px"
        propWidth="372px"
      />
      <div className="group-parent5">
        <div className="rectangle-parent3">
          <div className="group-child58" />
          <div className="editing">Editing</div>
          <b className="b24">1</b>
          <b className="property">property</b>
        </div>
        <div className="in-the-styling-container">
          <p className="in-the-styling">{`In the Styling & `}</p>
          <p className="in-the-styling">Layouts tab</p>
        </div>
      </div>
      <TagContainer
        taggingActionText="Adding"
        additionalTaggingActionTe="1"
        layersActionText="Action"
        preTaggedLayersActionText="In the Actions tab"
        propLeft="1130px"
        propLeft1="187px"
        propLeft2="93.1px"
        propWidth="313.7px"
      />
      <div className="group-wrapper">
        <div className="rectangle-parent3">
          <div className="group-child58" />
          <b className="getting-live-preview-container">
            <p className="in-the-styling">Getting</p>
            <p className="live-preview">Live preview</p>
          </b>
        </div>
      </div>
      <div className="group-frame">
        <div className="rectangle-parent3">
          <div className="group-child58" />
          <b className="exporting-code">
            <span>Exporting</span>
            <span className="code"> code</span>
          </b>
        </div>
      </div>
    </div>
  );
};

export default TaggingContainer;
