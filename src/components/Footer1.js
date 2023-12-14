import Footer from "./Footer";
import "./Footer1.css";

const Footer1 = () => {
  return (
    <div className="footer2">
      <Footer
        logo="/logo@2x.png"
        facebookIcon="/entyposocialfacebookwithcircle@2x.png"
        instagramIcon="/entyposocialinstagramwithcircle@2x.png"
        twitterIcon="/entyposocialtwitterwithcircle@2x.png"
      />
      <div className="footer-child" />
      <div className="footer-links2">
        <div className="company4">
          <div className="about-us2">About Us</div>
          <div className="company5">Company</div>
          <div className="news2">News</div>
          <div className="careers2">Careers</div>
          <div className="how-we-work2">How we work</div>
        </div>
        <div className="company4">
          <div className="account2">Account</div>
          <div className="support5">Support</div>
          <div className="support-center2">Support Center</div>
          <div className="faq2">FAQ</div>
          <div className="accessibility2">Accessibility</div>
        </div>
        <div className="more4">
          <div className="covid-advisory2">Covid Advisory</div>
          <div className="more5">More</div>
          <div className="airline-fees2">Airline Fees</div>
          <div className="tips2">Tips</div>
          <div className="how-we-work2">Quarantine Rules</div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
