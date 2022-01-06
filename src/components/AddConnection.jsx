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
      // replace w redux store
      const stops = [
        {
          id: "2273",
          mode: "tram",
          title: "Clarendon St/Park St #24",
        },
        {
          id: "1071",
          mode: "train",
          title: "Flinders Street Station",
        },
        {
          id: "31845",
          mode: "bus",
          title: "Footscray Station / Irving St",
        },
      ];

      const [stop, setStop] = React.useState("");

      const handleSelectStop = (event) => {
        setStop(event.target.value);
      };

      return (
        <FormControl>
          <Select value={stop} label="Stop" onChange={handleSelectStop}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={stops[0].title}>{stops[0].title}</MenuItem>
            <MenuItem value={stops[1].title}>{stops[1].title}</MenuItem>
            <MenuItem value={stops[2].title}>{stops[2].title}</MenuItem>
          </Select>
          <FormHelperText>Select stop</FormHelperText>
        </FormControl>
      );
    };
    return (
      <FormControl>
        <ConnectionName />
        <SelectStop id="stop-1" />
        <SelectStop id="stop-2" />
        <SelectStop id="stop-3" />
        <AddCxnButtons />
      </FormControl>
    );
  };
  return <ConnectionForm />;
}
