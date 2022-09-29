import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function GridExample() {
  return (
    <Row xs={1} md={4} className="g-4">
      <Col>
        <Card>
          <Card.Img
            variant="top"
            style={{
                width: "100%",
                height: 200
            }}
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2021%2F01%2FUnited_States_Department_of_Education_Logo.png&f=1&nofb=1&ipt=7cc75a09e0980e490375b265c16eee800008961d038aa88e60d851b9914e7409&ipo=images"
          />
          <Card.Body>
            <Card.Title>Education</Card.Title>
            <Card.Text>
                This is the department that is in charge of education in the county.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img
            variant="top"
            style={{
                width: "100%",
                height: 200
            }}
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.wisegeek.com%2Fsecurityguardwithbluebackground.jpg&f=1&nofb=1&ipt=a5434d75f574906494c41af0c766e72c76412ffaf8bbcc04d6a2a4a5eab2e57e&ipo=images"
          />
          <Card.Body>
            <Card.Title>Security</Card.Title>
            <Card.Text>
                This is the department that is in charge of security in the county.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdpwrt.mpg.gov.za%2Fwp-content%2Fuploads%2F2019%2F09%2FNew-ACornhoek-Library.jpg&f=1&nofb=1&ipt=92b9bba717f7e3f85920ea76d4c8fe54af3731c1c19c264ce15803ae88bdaad2&ipo=images"
          />
          <Card.Body>
            <Card.Title>Development</Card.Title>
            <Card.Text>
                This is the department that is in charge of development in the county.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Img
            variant="top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.AnB09cxKyoufqMTN9qBEhgHaFj%26pid%3DApi&f=1&ipt=e6023fe1d5b6fa345e66bbce7e9e85187c363c6840593700fc4566c92730dfd3&ipo=images"
          />
          <Card.Body>
            <Card.Title>Health</Card.Title>
            <Card.Text>
                This is the department that is in charge of health in the county.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default GridExample;
