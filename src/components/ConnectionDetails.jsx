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
import TramIcon from "@mui/icons-material/Tram";
import TrainIcon from "@mui/icons-material/Train";

import { useSelector } from "react-redux";

// TRANSPORT MODE ICONS 
const busIcon = () => {
  return <DirectionsBusIcon />;
};

const tramIcon = () => {
  return <TramIcon />;
};

const trainIcon = () => {
  return <TrainIcon />;
};

export default function ConnectionDetails() {
  const stops = useSelector((state) => state.stops);
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper nonLinear orientation="vertical">
        {stops.map((stop) => (
          <Step active expanded key={stop.title}>
            <StepLabel
              StepIconComponent={
                // render icon based on mode of transport
                (stop.mode === "bus" && busIcon) ||
                (stop.mode === "tram" && tramIcon) ||
                (stop.mode === "train" && trainIcon)
              }
            >
              {stop.title}
            </StepLabel>
            <StepContent>
              <Typography>DEPARTURE TIMES</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
