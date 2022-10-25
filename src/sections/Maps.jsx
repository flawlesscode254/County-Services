import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import db from "../firebase";

const Maps = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    db.collection("Progress").onSnapshot((snapshot) => {
      setProjects(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <Row xs={1} md={4} className="g-4">
      {projects.map((item) => {
        return (
          <Col key={item.data.id}>
            <Card>
              <Card.Body>
                <p
                  style={{
                    color: "blue",
                  }}
                >
                  Project
                </p>
                <Card.Title>{item.data.name}</Card.Title>
                <p
                  style={{
                    color: "blue",
                  }}
                >
                  Sub County
                </p>
                <Card.Title>{item.data.sub_county}</Card.Title>
                <p
                  style={{
                    color: "blue",
                  }}
                >
                  Ward
                </p>
                <Card.Title>{item.data.ward}</Card.Title>
                <p
                  style={{
                    color: "blue",
                  }}
                >
                  Cost
                </p>
                <Card.Title>{item.data.cost ? item.data.cost : 0}</Card.Title>
                <p
                  style={{
                    color: "blue",
                  }}
                >
                  Complete Projects
                </p>
                <Card.Title>
                  {item.data.complete_projects
                    ? item.data.complete_projects
                    : 0}
                </Card.Title>
                <p
                  style={{
                    color: "blue",
                  }}
                >
                  Employees
                </p>
                <Card.Title>
                  {item.data.employees ? item.data.employees : 0}
                </Card.Title>
                <p
                  style={{
                    color: "blue",
                  }}
                >
                  Rating
                </p>
                <Card.Title>
                  {item.data.rating ? item.data.rating : 0}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Maps;
