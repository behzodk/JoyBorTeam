import { useMemo } from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({
  searchFlights,
  primaryButtonWidth,
  primaryButtonHeight,
  primaryButtonCursor,
  primaryButtonBorder,
  primaryButtonPadding,
  primaryButtonBackgroundColor,
  primaryButtonPosition,
  rectangleDivBackgroundColor,
  searchFlightsLeft,
  searchFlightsDisplay,
}) => {
  const primaryButtonStyle = useMemo(() => {
    return {
      width: primaryButtonWidth,
      height: primaryButtonHeight,
      cursor: primaryButtonCursor,
      border: primaryButtonBorder,
      padding: primaryButtonPadding,
      backgroundColor: primaryButtonBackgroundColor,
      position: primaryButtonPosition,
    };
  }, [
    primaryButtonWidth,
    primaryButtonHeight,
    primaryButtonCursor,
    primaryButtonBorder,
    primaryButtonPadding,
    primaryButtonBackgroundColor,
    primaryButtonPosition,
  ]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const searchFlightsStyle = useMemo(() => {
    return {
      left: searchFlightsLeft,
      display: searchFlightsDisplay,
    };
  }, [searchFlightsLeft, searchFlightsDisplay]);

  return (
    <div className="primary-button" style={primaryButtonStyle}>
      <div className="primary-button-child" style={rectangleDivStyle} />
      <div className="search-flights" style={searchFlightsStyle}>
        {searchFlights}
      </div>
    </div>
  );
};

export default PrimaryButton;
