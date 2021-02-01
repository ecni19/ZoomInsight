import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
import Upload from './Upload';
function Home() {
  return (
    <Grid container style={{marginTop:'38vh', width:'60%', marginLeft:'auto', marginRight:'auto'}} className="body-txt" direction="row" justify="center" alignItems="center">
      <Grid item>
        <h1>Welcome to ZoomInsight.</h1>
        <br/>
        <h2>This webapp uses chat logs from recorded Zoom meetings to gauge student participation and understanding throughout a lecture.</h2>
      </Grid>
    </Grid>
  );
}

export default Home;
