// page for adding connection
// form with name field and 3x dropdown fields to select stops
// save button (must save connection to database and display on AllConnections)

//additional feature ideas: tooltips; '+' button that creates new Select component;

import * as React from "react";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AddConnection() {
  const ConnectionForm = (params) => {
    // form buttons
    const AddCxnButtons = () => {
      const SaveCxnButton = () => {
        return <Button variant="contained">Save Connection</Button>;
      };
      const CancelCxnButton = () => {
        return (
          <Link to="/">
            <Button variant="outlined">Cancel</Button>
          </Link>
        );
      };
      return (
        <ButtonGroup>
          <SaveCxnButton />
          &nbsp;
          <CancelCxnButton />
        </ButtonGroup>
      );
    };

    const ConnectionName = () => {
      return (
        <TextField
          required
          id="cxn-name"
          label="Name"
          placeholder="eg 'To Work'"
          variant="filled"
        />
      );
    };
    const SelectStop = () => {
      const stops = useSelector((state) => state.stops);

      const [stop, setStop] = React.useState("");

      const handleSelectStop = (event) => {
        setStop(event.target.value);
      };

      return (
        <FormControl>
          <Select value={stop} onChange={handleSelectStop}>
            {stops.map((stop) => (
              <MenuItem value={stop.title}>{stop.title}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Select stop</FormHelperText>
        </FormControl>
      );
    };
    return (
      <form id="add-cxn">
        <FormControl>
          <ConnectionName />
          <br />
          <SelectStop id="stop-1" />
          <SelectStop id="stop-2" />
          <SelectStop id="stop-3" />
          <AddCxnButtons />
        </FormControl>
      </form>
    );
  };
  return <ConnectionForm />;
}
