import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Typography, Fab, Grid, CircularProgress } from "@material-ui/core";
import "./LoginCard.css";

import { signIn } from "../../redux/action/authAction";
import { store } from "../../redux/store";

function LoginCard() {
  const history = useHistory();
  const [loading, setLoading] = useState(store.getState().authReducer.loading);

  useEffect(() => {
    store.subscribe(() => {
      setLoading(store.getState().authReducer.loading);
    });
    return () => {};
  }, []);

  const _handleSignIn = async () => {
    try {
      await signIn();
      // history.push("/map");
    } catch (error) {
      console.log("error", error);
    }
  };

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
