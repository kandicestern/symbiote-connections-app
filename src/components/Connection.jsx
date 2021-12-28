// Connection card used to display each connection on AllConnections


import Card from "@mui/material/Card";
import Container from "@mui/material/Container";

function ListConnection() {
  var connection = (
    <Card>
      <p>Connection Name prop</p>
    </Card>
  );

  return <Container size={1}>{connection}</Container>;
}
export default ListConnection;
