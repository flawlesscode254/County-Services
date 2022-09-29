import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function WithHeaderExample() {
  return (
    <div>
      <Card
        style={{
          marginBottom: 20,
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
        </Card.Body>
      </Card>
      <Card
        style={{
          marginBottom: 20,
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
        </Card.Body>
      </Card>
      <Card
        style={{
          marginBottom: 20,
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
        </Card.Body>
      </Card>
    </div>
  );
}

export default WithHeaderExample;
