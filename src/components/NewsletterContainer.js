import NewsletterFormContainer from "./NewsletterFormContainer";
import Footer from "./Footer";
import "./NewsletterContainer.css";

const NewsletterContainer = () => {
  return (
    <div className="footer-section1">
      <NewsletterFormContainer
        propWidth="1440px"
        propBackgroundImage="url('/newsletter-form-section@3x.png')"
      />
      <footer className="footer">
        <Footer
          logo="/logo@2x.png"
          facebookIcon="/facebook-icon@2x.png"
          instagramIcon="/instagram-icon@2x.png"
          twitterIcon="/twitter-icon@2x.png"
        />
        <div className="seperator" />
        <div className="footer-links">
          <div className="company">
            <div className="about-us">About Us</div>
            <div className="company1">Company</div>
            <div className="news">News</div>
            <div className="careers">Careers</div>
            <div className="how-we-work">How we work</div>
          </div>
          <div className="company">
            <div className="account">Account</div>
            <div className="support1">Support</div>
            <div className="support-center">Support Center</div>
            <div className="faq">FAQ</div>
            <div className="accessibility">Accessibility</div>
          </div>
          <div className="more">
            <div className="covid-advisory">Covid Advisory</div>
            <div className="more1">More</div>
            <div className="airline-fees">Airline Fees</div>
            <div className="tips">Tips</div>
            <div className="how-we-work">Quarantine Rules</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsletterContainer;
