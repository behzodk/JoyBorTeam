import PrimaryButton from "./PrimaryButton";
import "./FlightContainer.css";

const FlightContainer = () => {
  return (
    <div className="flight-cards">
      <div className="results7">10 out of 177 Results</div>
      <FlightCard
        flightDetails="/turkish@2x.png"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 1-stop"
        flightTime="4:45 PM"
        price="S$ 723"
        propWidth="121px"
      />
      <FlightCard
        flightDetails="/sia@2x.png"
        airlineName="Singapore Airlines"
        departureTime="8:45 PM"
        flightDuration="15H 10M, 2-stops"
        flightTime="7:55 PM"
        price="S$ 900"
        propTransform="unset"
        propWidth="129px"
      />
      <FlightCard
        flightDetails="/japan@2x.png"
        airlineName="Japan Airlines"
        departureTime="8:20 PM"
        flightDuration="17H 30M, 1-stop"
        flightTime="9:50 PM"
        price="S$ 859"
        propTransform="scale(0.8)"
        propWidth="121px"
      />
      <FlightCard
        flightDetails="/ana@2x.png"
        airlineName="ANA"
        departureTime="6:35 PM"
        flightDuration="19H 15M, 1-stop"
        flightTime="9:50 PM"
        price="S$ 936"
        propTransform="scale(0.8)"
        propWidth="121px"
      />
      <FlightCard
        flightDetails="/americanairlines@2x.png"
        airlineName="American Airlines"
        departureTime="8:20 PM"
        flightDuration="17H 30M, 1-stop"
        flightTime="9:50 PM"
        price="S$ 936"
        propTransform="unset"
        propWidth="121px"
      />
      <FlightCard
        flightDetails="/turkish@2x.png"
        airlineName="Turkish Airlines"
        departureTime="11:35 PM"
        flightDuration="33H 10M, 1-stop"
        flightTime="4:45 PM"
        price="S$ 673"
        propTransform="unset"
        propWidth="121px"
      />
      <FlightCard
        flightDetails="/japan@2x.png"
        airlineName="Japan Airlines"
        departureTime="10:25 PM"
        flightDuration="26H 45M, 1-stop"
        flightTime="9:10 AM"
        price="S$ 859"
        propTransform="scale(0.8)"
        propWidth="121px"
      />
      <PrimaryButton
        searchFlights="Show more results"
        primaryButtonWidth="220px"
        primaryButtonHeight="72px"
        primaryButtonCursor="unset"
        primaryButtonBorder="unset"
        primaryButtonPadding="unset"
        primaryButtonBackgroundColor="unset"
        primaryButtonPosition="relative"
        rectangleDivBackgroundColor="#1262af"
        searchFlightsLeft="calc(50% - 81.5px)"
        searchFlightsDisplay="inline-block"
      />
    </div>
  );
};

export default FlightContainer;
