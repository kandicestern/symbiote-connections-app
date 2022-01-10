import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
// import Snackbar from "@mui/material/Snackbar";

class ConnectionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      connection: {
        name: "",
        stops: [""],
      },
    };
  }

  render() {
    const handleSave = (e) => {
      alert("New connection '" + e.target.name.value + "' saved"); // replace with Snackbar component

      // update state with form contents
      this.setState({
        connection: {
          name: e.target.name.value,
          stops: [e.target.stop.value],
        },
      });
      // save form contents as new connection
      // return to "/" page to view all connections
    };

    // form buttons
    const AddCxnButtons = () => {
      const SaveCxnButton = () => {
        return (
          <Button type="submit" variant="contained">
            Save Connection
          </Button>
        );
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

    // form fields
    // name
    const ConnectionName = () => {
      return (
        <TextField
          required
          name="name"
          id="cxn-name"
          label="Name"
          value={this.state.name}
          placeholder="eg 'To Work'"
          variant="filled"
        />
      );
    };
    // stops selection dropdown
    const SelectStop = () => {
      const stops = useSelector((state) => state.stops);

      const [stop, setStop] = React.useState("");

      const handleSelectStop = (event) => {
        setStop(event.target.value);
      };

      return (
        <FormControl>
          <Select name="stops" value={stop} onChange={handleSelectStop}>
            {stops.map((stop) => (
              <MenuItem value={stop.id}>{stop.title}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Select stop</FormHelperText>
        </FormControl>
      );
    };
    return (
      <form onSubmit={handleSave} value={this.state.connection} id="add-cxn">
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
  }
}
export default ConnectionForm;
