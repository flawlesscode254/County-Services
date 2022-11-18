import React, { useState, useEffect } from "react";
import db from "../firebase";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const Analytics = () => {
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

  const labels = projects.map((val) => val.data.sub_county);
  let counts = projects.map((val) => val.data.cost);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Bomet County Projects Analytics",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: counts,
      },
    ],
  };

  return (
    <div>
      <div>
        <Line data={data} />
      </div>
    </div>
  );
};

export default Analytics;
