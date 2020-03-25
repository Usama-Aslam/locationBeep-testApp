import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import "./App.css";

import Routes from "./routes/Router";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

function App() {
  const [showInstallMessage, setShowInstallMessage] = useState(false);

  const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  };
  // Detects if device is in standalone mode
  const isInStandaloneMode = () =>
    "standalone" in window.navigator && window.navigator.standalone;

  useEffect(() => {
    if (isIos() && !isInStandaloneMode()) {
      setShowInstallMessage(true);
    }
  }, []);

  console.log("showInstallMessage", showInstallMessage);
  const installMessagePWA = () => (
    <Dialog
      open={showInstallMessage}
      onClose={() => {
        setShowInstallMessage(false);
      }}
      fullWidth={true}
      // maxWidth="xl"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Install this webapp on your iPhone: tap{" "}
          <img
            src={require("./asset/menuIcon.png")}
            width="30px"
            height="30px"
            style={{ display: "inline" }}
          />
          then slide to left and tap Add to homescreen.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setShowInstallMessage(false);
          }}
          color="primary"
          autoFocus
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <div className="App">
      {installMessagePWA()}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
