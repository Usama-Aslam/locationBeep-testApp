import React, { Component, useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Fab,
  Grid,
  CircularProgress
} from "@material-ui/core";

import { Facebook } from "@material-ui/icons";
import "./LoginCard.css";

function LoginCard() {
  return (
    <div className="loginCardDiv">
      <div className="mini-loginCardDiv">
        <Typography className="mini-loginCardDiv-heading">
          Location Beep
        </Typography>
      </div>

      <div className="loginCardDiv-textDiv">
        <Typography className="textDiv-tagline">
          Track Millions of location
        </Typography>

        <Grid container spacing={8} alignItems="flex-end">
          <Grid item xs={12}>
            <Grid container spacing={8} alignItems="flex-end"></Grid>
          </Grid>

          <Grid item xs={12} md={12} style={{ marginTop: "2vh" }}>
            <Fab
              variant="extended"
              //   disabled={this.props.authDetail.loading}
              className="textDiv-loginBtn"
              style={{ background: "#8e24aa" }}
            >
              {false ? (
                <CircularProgress style={{ color: "white" }} size={29} />
              ) : (
                <span>Log In With Facebook</span>
              )}
            </Fab>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default LoginCard;
