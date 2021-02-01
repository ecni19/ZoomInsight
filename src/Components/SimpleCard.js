import React, { useState } from "react";
import Graph from "./Graph";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  space: {
    padding: 90,
    marginTop: -30,
  },
});

const useStyles2 = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 325,
    height: '94vh',
  },
}));

const testArr = [
  {
    Lecture: 1,
    Messages: [5, 3, 2, 1, 9, 2, 5, 2, 4, 7, 1, 1, 2],
    Time: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
  {
    Lecture: 2,
    Messages: [3, 14, 5, 6, 8, 10, 7, 9, 6, 12, 1, 3, 20],
    Time: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
  {
    Lecture: 3,
    Messages: [10, 3, 3, 4, 2, 10, 2, 4, 11, 2, 12, 4, 10],
    Time: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
  {
    Lecture: 4,
    Messages: [2, 10, 4, 5, 6, 6, 3, 3, 6, 3, 12, 7, 20],
    Time: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
  {
    Lecture: 5,
    Messages: [2, 10, 4, 5, 6, 3, 5, 3, 7, 2, 6, 8, 15],
    Time: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
  {
    Lecture: 6,
    Messages: [2, 3, 10, 9, 9, 6, 2, 9, 2, 5, 2, 5, 9],
    Time: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
  {
    Lecture: 7,
    Messages: [9, 2, 9, 6, 6, 3, 2, 6, 8, 2, 7, 2, 16],
    Time: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
  {
    Lecture: 8,
    Messages: [3, 2, 3, 4, 7, 3, 8, 3, 4, 2, 2, 9, 6],
    Time: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
  {
    Lecture: 9,
    Messages: [5, 3, 7, 2, 6, 2, 4, 7, 8, 1, 2, 6, 9],
    Time: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
  },
];

function SimpleCard(props) {
  const classes = useStyles();
  const gridListClasses = useStyles2();
  const [showComponent, setShowComponent] = useState(false);
  const [id, setID] = useState('');

  const handleRegionClick = (i) => {
    if (showComponent === false) {
      setShowComponent((showComponent) => !showComponent);
    }
    setID(i);
  };

  return (
    <div style={{float:'left'}} className={gridListClasses.root}>
      <GridList cellHeight={180} className={gridListClasses.gridList}>
        {props.lectureArr.map((lecture, index) => (
          <GridListTile key={index} cols={2} style={{height: 'auto'}}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <h1>{lecture}</h1>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleRegionClick(index)}>
                  See Data
                </Button>
              </CardActions>
            </Card>
          </GridListTile>
        ))}
      </GridList>

      {showComponent === true ? (
        <Graph
          x={testArr[id].Time}
          y={testArr[id].Messages}
          lecture={testArr[id].Lecture}
        />
      ) : null}
    </div>
  );
}

export default SimpleCard;
