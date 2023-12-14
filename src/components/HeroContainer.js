import { useState } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./HeroContainer.css";

let regions = [
  "Hammasi",
  "Andijon",
  "Buxoro",
  "Farg'ona",
  "Jizzax",
  "Namangan",
  "Navoiy",
  "Qashqadaryo",
  "Qoraqalpog'iston",
  "Samarqand",
  "Sirdaryo",
  "Surxondaryo",
  "Toshkent vil.",
  "Toshkent sh.",
  "Xorazm"
]

const HeroContainer = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="hero-section">
        <div className="search-section1">
          <div className="banner-gradient" />
          <img
            className="banner-background"
            alt=""
            src="/banner--background@2x.png"
          />
          <div className="search-container1">
            <div className="title2">
              <div className="lets-explore">{`Let’s explore & travel the world`}</div>
              <div className="find-the-best">
                Find the best destinations and the most popular stays!
              </div>
            </div>
            <div className="search-form1">
              <div className="form-title-group">
                <b className="search-flights1">Uylarni Qidirish</b>
                <div className="flight-options">
                  <div className="flight-type">
                    <FormControlLabel
                      className="radio"
                      label="Return"
                      labelPlacement="end"
                      control={<Radio size="medium" />}
                    />
                    <FormControlLabel
                      className="radio1"
                      label="One-way"
                      labelPlacement="end"
                      control={<Radio color="primary" checked size="medium" />}
                    />
                  </div>
                </div>
              </div>
              <div className="form-inputs-row">
                <div className="inputs-row1">
                  <Autocomplete
                    className="selectoutlined"
                    size="medium"
                    disablePortal
                    options={regions}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Viloyat"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue={regions[0]}
                  />
                  <Autocomplete
                    className="selectoutlined"
                    size="medium"
                    disablePortal
                    options={["Hammasi","Sotib olish","Ijaraga olish"]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        color="primary"
                        label="Maqsad"
                        variant="outlined"
                        placeholder=""
                        helperText=""
                      />
                    )}
                    defaultValue="Hammasi"
                  />
                  <div className="selectoutlined">
                    <DatePicker
                      label="Date"
                      value={selectOutlinedDateTimePickerValue}
                      onChange={(newValue) => {
                        setSelectOutlinedDateTimePickerValue(newValue);
                      }}
                      slotProps={{
                        textField: {
                          variant: "outlined",
                          size: "medium",
                          fullWidth: true,
                          color: "primary",
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="button-group1">
                  <div className="search-flights-button1">
                    <div className="button7">Uylarni Qidirish</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default HeroContainer;
