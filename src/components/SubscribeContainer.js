import Arrow from "./Arrow";
import VariantContainedSizeLarge from "./VariantContainedSizeLarge";
import "./SubscribeContainer.css";

const SubscribeContainer = () => {
  return (
    <div className="subscribe-section">
      <img
        className="subscribe-section-background"
        alt=""
        src="/subscribe-section-background@2x.png"
      />
      <div className="share-your-travels-form">
        <div className="form-header1">
          <b className="form-title-subtext1">subscribe to our newsletter</b>
          <b className="form-title1">Get weekly updates</b>
        </div>
        <form className="form1">
          <div className="form-text1">
            <div className="fill-in-your1">
              Fill in your details to join the party!
            </div>
          </div>
          <div className="form-fields1">
            <div className="form-text1">
              <div className="input3">
                <div className="inactive">
                  <div className="muiautocompletetag1">
                    <div className="chip4">
                      <div className="container2">
                        <div className="avatar2">
                          <div className="op2">F</div>
                        </div>
                        <div className="typography2">
                          <div className="chip5">Chip</div>
                        </div>
                        <img
                          className="cancel-icon2"
                          alt=""
                          src="/cancel@2x.png"
                        />
                      </div>
                    </div>
                    <div className="chip4">
                      <div className="container2">
                        <div className="avatar2">
                          <div className="op2">F</div>
                        </div>
                        <div className="typography2">
                          <div className="chip5">Chip</div>
                        </div>
                        <img
                          className="cancel-icon2"
                          alt=""
                          src="/cancel@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="your-name">Your name</div>
                  <div className="mui-autocomplete-indicator">
                    <div className="iconbutton">
                      <div className="unstylediconbutton">
                        <img
                          className="close-icon"
                          alt=""
                          src="/close@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <Arrow
                    arrowDropDown="/arrowdropdown@2x.png"
                    arrowFlexShrink="0"
                  />
                </div>
              </div>
            </div>
            <div className="form-text1">
              <div className="input3">
                <div className="inactive1">
                  <div className="muiautocompletetag1">
                    <div className="chip4">
                      <div className="container2">
                        <div className="avatar2">
                          <div className="op2">F</div>
                        </div>
                        <div className="typography2">
                          <div className="chip5">Chip</div>
                        </div>
                        <img
                          className="cancel-icon2"
                          alt=""
                          src="/cancel@2x.png"
                        />
                      </div>
                    </div>
                    <div className="chip4">
                      <div className="container2">
                        <div className="avatar2">
                          <div className="op2">F</div>
                        </div>
                        <div className="typography2">
                          <div className="chip5">Chip</div>
                        </div>
                        <img
                          className="cancel-icon2"
                          alt=""
                          src="/cancel@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="your-name">Email address</div>
                  <div className="mui-autocomplete-indicator">
                    <div className="iconbutton">
                      <div className="unstylediconbutton">
                        <img
                          className="close-icon"
                          alt=""
                          src="/close@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <Arrow
                    arrowDropDown="/arrowdropdown@2x.png"
                    arrowFlexShrink="0"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="button9">
            <VariantContainedSizeLarge
              button="submit"
              variantContainedSizeLargeBoxSizing="border-box"
              buttonColor="#fff"
              buttonDisplay="inline-block"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeContainer;
