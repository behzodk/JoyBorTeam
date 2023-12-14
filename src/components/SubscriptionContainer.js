import NewsletterFormContainer from "./NewsletterFormContainer";
import Footer from "./Footer";
import "./SubscriptionContainer.css";

const SubscriptionContainer = () => {
  return (
    <div className="footer-section2">
      <div className="footer-section2">
        <NewsletterFormContainer
          propWidth="unset"
          propBackgroundImage="url('/newsletter-form-section1@3x.png')"
          propAlignSelf="stretch"
        />
        <footer className="footer1">
          <Footer
            logo="/logo@2x.png"
            facebookIcon="/facebook-icon@2x.png"
            instagramIcon="/instagram-icon@2x.png"
            twitterIcon="/twitter-icon@2x.png"
          />
          <div className="seperator1" />
          <div className="footer-links1">
            <div className="company2">
              <div className="frame4">
                <div className="company3">Company</div>
                <div className="about-us1">About Us</div>
              </div>
              <div className="frame5">
                <div className="news1">News</div>
                <div className="careers1">Careers</div>
                <div className="how-we-work1">How we work</div>
              </div>
            </div>
            <div className="company2">
              <div className="frame6">
                <div className="support3">Support</div>
                <div className="account1">Account</div>
              </div>
              <div className="frame5">
                <div className="how-we-work1">Support Center</div>
                <div className="faq1">FAQ</div>
                <div className="accessibility1">Accessibility</div>
              </div>
            </div>
            <div className="more2">
              <div className="frame8">
                <div className="more3">More</div>
                <div className="covid-advisory1">Covid Advisory</div>
              </div>
              <div className="frame5">
                <div className="airline-fees1">Airline Fees</div>
                <div className="tips1">Tips</div>
                <div className="how-we-work1">Quarantine Rules</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SubscriptionContainer;
