// Connection card used to display each connection on AllConnections
// Requirements: display connection name and provide dropdown/toggle to
// display ConnectionDetails
//
// Additional features: options to edit and delete a connection

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

import ConnectionDetails from "./ConnectionDetails";
import { useSelector } from "react-redux";

function ListConnection() {
  const name = useSelector((state) => state.name);
  const ConnectionAccordion = () => {
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="connection-content"
          id="connection-header"
        >
          <Typography>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ConnectionDetails />
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <div>
      <ConnectionAccordion />
    </div>
  );
}
export default ListConnection;
