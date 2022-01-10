// Connection card used to display each connection on AllConnections
// Requirements: display connection name and provide dropdown/toggle to display ConnectionDetails
// Future additional features: options to edit and delete connections

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useSelector } from "react-redux";

import ConnectionDetails from "./ConnectionDetails";

export default function ListConnection() {
  const connections = useSelector((state) => state.connections);

  const ConnectionAccordion = () => {
    return (
      <div>
        {connections.map((connection) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="connection-content"
              id="connection-header"
            >
              <Typography>{connection.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ConnectionDetails />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    );
  };

  return (
    <div>
      <ConnectionAccordion />
    </div>
  );
}
