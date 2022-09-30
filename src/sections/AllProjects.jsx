import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useAuthState } from "react-firebase-hooks/auth";
import db, { auth } from "../firebase";

import NewProject from "./NewProject";

function WithHeaderExample() {
  const [data, setData] = useState([]);

  const [session] = useAuthState(auth);

  useEffect(() => {
    db.collection("projects")
      .where("state", "==", "All")
      .onSnapshot((snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const updateComplete = (refId) => {
    db.collection("projects").doc(refId).update({
      state: "Complete",
    });
  };

  const updateOngoing = (refId) => {
    db.collection("projects").doc(refId).update({
      state: "Ongoing",
    });
  };

  return (
    <div>
      {session && (
        <div
          style={{
            margin: 20,
          }}
        >
          <NewProject />
        </div>
      )}
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            style={{
              marginBottom: 20,
            }}
          >
            <Card.Header>{item.data.author}</Card.Header>
            <Card.Body>
              <Card.Title>{item.data.title}</Card.Title>
              <Card.Text>{item.data.description}</Card.Text>
              {session && (
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
                  <Button
                    onClick={() => {
                      updateOngoing(item.id);
                    }}
                    variant="primary"
                  >
                    Set as Ongoing
                  </Button>
                  <Button
                    onClick={() => {
                      updateComplete(item.id);
                    }}
                    variant="danger"
                  >
                    Set as Complete
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default WithHeaderExample;
