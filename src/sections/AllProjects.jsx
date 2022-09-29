import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import NewProject from "./NewProject";

function WithHeaderExample() {
  return (
    <div>
      <div
        style={{
          margin: 20,
        }}
      >
        <NewProject />
      </div>
      <Card
        style={{
          marginBottom: 20,
        }}
      >
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              width: 400,
            }}
          >
            <Button variant="primary">Set as Ongoing</Button>
            <Button variant="danger">Set as Complete</Button>
          </div>
        </Card.Body>
      </Card>
      <Card
        style={{
          marginBottom: 20,
          marginBottom: 10,
        }}
      >
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              width: 400,
            }}
          >
            <Button variant="primary">Set as Ongoing</Button>
            <Button variant="danger">Set as Complete</Button>
          </div>
        </Card.Body>
      </Card>
      <Card
        style={{
          marginBottom: 20,
          marginBottom: 10,
        }}
      >
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              flexWrap: "wrap",
              width: 400,
            }}
          >
            <Button variant="primary">Set as Ongoing</Button>
            <Button variant="danger">Set as Complete</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WithHeaderExample;
