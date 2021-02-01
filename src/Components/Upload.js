import React, { Component } from "react";
import { app } from "../firestore";
import parse from "./Parser";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

//const fs = require("fs");
//const RNFS = require('react-native-fs');

// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp()
// const spawn = require('child-process-promise').spawn;
const path = require("path");
const os = require("os");

class Upload extends React.Component {
  state = {
    selectedFile: null,
  };

  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    console.log("Upload selected");
    //console.log(this.state.selectedFile.name);
  };

  onFileUpload = () => {
    //const file = this.target.files[0];
    const file = this.state.selectedFile;
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    const name = +new Date() + "-" + file.name;
    fileRef.put(file).then( () => {
        console.log(fileRef.path);
        //const jsonString = parse(fileRef);
        //console.log(jsonString);
    });
    //   console.log("Uploaded a file: " + fileRef.fullPath);
    //   console.log(fileRef);
    //   fileRef.getDownloadURL().then(function (url) {
    //     console.log(url);
    //   });
    //   fs.readFile(file, (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    //     messages_raw = splitLines(data);
    //   });
      //   const jsonString = parse(fileRef.fullPath);
      //   console.log(jsonString);
    // });
    // const fileBucket = file.bucket;
    // const fileName = file.name;
    // const bucket = admin.storage().bucket(fileBucket);
    // const tempFilePath = path.join(os.tmpdir(), fileName);
    // bucket.file(filePath).download({destination: tempFilePath})
    //     .catch(console.log);
    // const string = parse(tempFilePath);
    // storageRef.child(file.name).getDownloadURL().then(parse(url));
    // console.log(string);
    //});
}

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <p>File Name: {this.state.selectedFile.name}</p>
        </div>
      );
    }
  };

  render() {
    return (
      <div style={{ marginTop: "29vh" }}>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <input
            style={{ display: "none" }}
            type="file"
            id="upload-file"
            onChange={this.onFileChange}
            accept=".txt"
          />
          <label htmlFor="upload-file">
            <Button
              style={{boxShadow: '0 3px 5px 2px grey', marginBottom: "25px", fontSize: "18pt", height: "150px", width: "350px" }}
              variant="contained"
              color="primary"
              component="span"
            >
              Choose File
            </Button>
          </label>
          <Button
            style={{boxShadow: '0 3px 5px 2px grey', fontSize: "18pt", height: "150px", width: "350px" }}
            variant="contained"
            color="primary"
            onClick={this.onFileUpload}
          >
            Upload
          </Button>
          {this.fileData()}
        </Grid>
      </div>
    );
  }
}

export default Upload;
