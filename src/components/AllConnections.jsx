// grab all connection objects from database
// display all connections
// display 'add new connection' button onclick displays AddConnection

//import { Fragment } from "react";
import ListConnection from "./Connection";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

export default function AllConnections() {
  const AddCxnButton = () => {
    return (
      <Link to="/add-connection">
        <Button variant="contained">Add New</Button>
      </Link>
    );
  };
  return (
    <Container size={1}>
      <Card>
        <ListConnection />
      </Card>
      <br />

      <AddCxnButton />
    </Container>
  );
}
