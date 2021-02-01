import React from "react";
import Graph from './Graph';
import SimpleCard from './SimpleCard';


function Lecture() {
  const arr = ["Lecture 1", "Lecture 2", "Lecture 3", "Lecture 4", "Lecture 5", "Lecture 6", "Lecture 7", "Lecture 8", "Lecture 9"];

  return (
    <div>
      <SimpleCard lectureArr={arr}/>
    </div>
  );
}

export default Lecture;
