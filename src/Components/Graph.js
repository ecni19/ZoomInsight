import React, { useState, useEffect } from "react";
import "./Graph.css";
import { Line } from "react-chartjs-2";

function Graph(props) {
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [lecture, setLecture] = useState("");

  useEffect(() => {
    setX(props.x);
    setY(props.y);
    setLecture(props.lecture);
  }, [props.x, props.y, props.lecture]);

  let state = {
    labels: x,
    datasets: [
      {
        label: "Messages",
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: y,
      },
    ],
  };
  return (
    <div>
      <Line
        data={state}
        width={1550}
        height={100}
        options={{
          title: {
            display: true,
            text: "Lecture " + lecture,
            fontSize: 20,
          },
          maintainAspectRatio: false,
          legend: {
            display: true,
            position: "right",
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "# Messages",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Recording Time",
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default Graph;
