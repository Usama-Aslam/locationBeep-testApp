import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Typography, Fab, Grid, CircularProgress } from "@material-ui/core";
import "./LoginCard.css";

import { signIn, signOut } from "../../redux/action/authAction";
import { store } from "../../redux/store";

function LoginCard(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const loading = useSelector(state => state.authReducer.loading);
  const user = useSelector(state => state.authReducer.user);

  const _handleSignIn = () => {
    try {
      dispatch(signIn(history));
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log(user);

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
              onClick={_handleSignIn}
            >
              {loading ? (
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
