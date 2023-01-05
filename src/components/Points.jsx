import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import Departments from "../sections/Departments";
import AllProjects from "../sections/AllProjects";
import Ongoing from "../sections/Ongoing";
import Complete from "../sections/Complete";
import Maps from "../sections/Maps";
import Analytics from "../sections/Analytics";
import Questionaires from "../sections/Questionaires";
import Reports from "../sections/Reports";

function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">County Departments</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">All Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Ongoing Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Complete Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Project Stats</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth">Analytics</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="seventh">Questionaires</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eighth">Reports</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Departments />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <AllProjects />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Ongoing />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <Complete />
            </Tab.Pane>
            <Tab.Pane
              eventKey="fifth"
              style={{
                height: "100vh",
                width: "100%",
              }}
            >
              <Maps />
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
              <Analytics />
            </Tab.Pane>
            <Tab.Pane eventKey="seventh">
              <Questionaires />
            </Tab.Pane>
            <Tab.Pane eventKey="eighth">
              <Reports />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftTabsExample;
