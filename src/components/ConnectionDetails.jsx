import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

import { useSelector } from "react-redux";

import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TramIcon from "@mui/icons-material/Tram";
import TrainIcon from "@mui/icons-material/Train";
//import { format } from "date-fns";

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
  const departures = useSelector((state) => state.departures);
  const stops = useSelector((state) => state.stops);
  // const local_departure_time = () => {format(departure.departure_time_utc, HH:mm)};
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
              {
                // match connection.stops with stops.id to conditionally render stops
                stop.title
              }
            </StepLabel>
            <StepContent>
              <Typography>Next departures:</Typography>
              {departures.map(
                (departure) =>
                  departure.stop_id === stop.id && (
                    <Typography>{departure.departure_time_utc}</Typography> // replace with local_departure_time
                  )
              )}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
