// grab all connection objects from database
// display all connections
// display 'add new connection' button onclick displays AddConnection

//import { Fragment } from "react";
import ListConnection from "./Connection";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

export default function AllConnections() {
  const AddCxnButton = () => {
    return <Button variant="contained">Add New</Button>;
  };
  return (
    <Container size={1}>
      <Card>
        <ListConnection />
      </Card>
      <AddCxnButton />
    </Container>
  );
}
