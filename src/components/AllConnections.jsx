// grab all connection objects from database
// display all connections
// display 'add new connection' button onclick displays AddConnection

//import { Fragment } from "react";
import ListConnection from "./Connection";
import Container from "@mui/material/Container";

export default function AllConnections() {
  return (
    <Container size={1}>
      <ListConnection />
      <p>add new connection button</p>
    </Container>
  );
}
