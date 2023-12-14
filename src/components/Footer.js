import "./Footer.css";

const Footer = ({ logo, facebookIcon, instagramIcon, twitterIcon }) => {
  return (
    <div className="fickleflight-bio">
      <img className="logo-icon" alt="" src={logo} />
      <div className="fickle-flight-is">
        Fickle Flight is your one-stop travel portal. We offer hassle free
        flight and hotel bookings. We also have all your flight needs in you
        online shop.
      </div>
      <div className="social-icons">
        <img className="facebook-icon" alt="" src={facebookIcon} />
        <img className="facebook-icon" alt="" src={instagramIcon} />
        <img className="facebook-icon" alt="" src={twitterIcon} />
      </div>
    </div>
  );
};

export default Footer;
