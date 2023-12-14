import { Checkbox, FormControlLabel } from "@mui/material";
import "./SearchFilterContainer.css";

const SearchFilterContainer = () => {
  return (
    <div className="search-filters">
      <div className="results-parent">
        <div className="results2">10 out of 177 Results</div>
        <img className="frame-child" alt="" src="/vector-2@2x.png" />
      </div>
      <div className="stops">
        <b className="results2">Stops</b>
        <div className="frame">
          <FormControlLabel
            label="1 Stop"
            labelPlacement="end"
            control={<Checkbox size="medium" />}
          />
          <FormControlLabel
            label="2 Stops"
            labelPlacement="end"
            control={<Checkbox size="medium" />}
          />
        </div>
      </div>
      <div className="stops">
        <b className="results2">Booking Options</b>
        <div className="frame">
          <FormControlLabel
            className="component-1formcheckbox"
            label="Book on Fickleflight"
            labelPlacement="end"
            control={<Checkbox size="medium" />}
          />
          <FormControlLabel
            className="component-1formcheckbox"
            label="Official Airline Websites"
            labelPlacement="end"
            control={<Checkbox size="medium" />}
          />
        </div>
      </div>
      <div className="stops">
        <b className="results5">Flight Experience</b>
        <div className="frame2">
          <FormControlLabel
            className="component-1formcheckbox"
            label="No overnight flights"
            labelPlacement="end"
            control={<Checkbox color="primary" size="medium" />}
          />
          <FormControlLabel
            className="component-1formcheckbox"
            label="No long stop-overs"
            labelPlacement="end"
            control={<Checkbox color="primary" size="medium" />}
          />
        </div>
      </div>
      <img className="frame-child" alt="" src="/vector-2@2x.png" />
      <div className="airlines">
        <b className="results6">Airlines</b>
        <div className="frame3">
          <FormControlLabel
            label="Singapore Airlines"
            labelPlacement="end"
            control={<Checkbox color="primary" size="medium" />}
          />
          <FormControlLabel
            label="Qatar Airways"
            labelPlacement="end"
            control={<Checkbox color="primary" size="medium" />}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilterContainer;
