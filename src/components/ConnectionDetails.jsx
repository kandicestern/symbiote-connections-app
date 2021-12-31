// display stops with next 3 departure times
// only display departure times > current time (?)

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";

import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

const stops = [
  {
    id: "2273",
    mode: "tram",
    title: "Clarendon St/Park St #24",
    departure_time_utc: "2019-03-21T02:24:00Z",
  },
  {
    id: "1071",
    mode: "train",
    title: "Flinders Street Station",
    departure_time_utc: "2019-03-21T02:24:00Z",
  },
  {
    id: "31845",
    mode: "bus",
    title: "Footscray Station / Irving St",
    departure_time_utc: "2019-03-21T02:24:00Z",
  },
];

export default function ConnectionDetails() {
  const busIcon = () => {
    return <DirectionsBusIcon />;
  };
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper nonLinear orientation="vertical">
        {stops.map((stop) => (
          <Step active expanded key={stop.title}>
            <StepLabel StepIconComponent={busIcon}>
              {stop.title}
            </StepLabel>
            <StepContent>
              <Typography>{stop.departure_time_utc}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
