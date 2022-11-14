import React, { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import Card from "react-bootstrap/Card";
import "../index.css";

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
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <MapContainer
        className="map"
        center={[35.2831, -0.3677]}
        zoom={2}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {projects.map((item) => (
          <Marker
            key={item.data.id}
            position={[item.data.x_coordinate, item.data.y_coordinate]}
          >
            <Popup>
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
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Maps;
