import { useMemo } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import VariantContainedSizeLarge from "./VariantContainedSizeLarge";
import "./NewsletterFormContainer.css";

const NewsletterFormContainer = ({
  propWidth,
  propBackgroundImage,
  propAlignSelf,
}) => {
  const newsletterFormSectionStyle = useMemo(() => {
    return {
      width: propWidth,
      backgroundImage: propBackgroundImage,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propBackgroundImage, propAlignSelf]);

  return (
    <div className="newsletter-form-section" style={newsletterFormSectionStyle}>
      <div className="subscribe-form">
        <div className="form-header">
          <b className="form-title-subtext">subscribe to our newsletter</b>
          <b className="form-title">Get weekly updates</b>
        </div>
        <div className="form">
          <div className="form-text">
            <div className="fill-in-your">
              Fill in your details to join the party!
            </div>
          </div>
          <div className="form-fields">
            <div className="form-text">
              <TextField
                className="input"
                color="primary"
                label="Your name"
                size="medium"
                variant="outlined"
                type="text"
              />
            </div>
            <div className="form-text">
              <TextField
                className="input"
                color="primary"
                label="Email address"
                size="medium"
                variant="outlined"
                type="text"
              />
            </div>
          </div>
          <button className="button5">
            <VariantContainedSizeLarge
              button="submit"
              variantContainedSizeLargeBoxSizing="border-box"
              buttonColor="#fff"
              buttonDisplay="inline-block"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterFormContainer;
