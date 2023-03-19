import React, { useCallback, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { Box, Typography } from "@mui/material";

const clientId =
  "555630715109-et9a11ivurav2a87vqi58vmupuc945os.apps.googleusercontent.com";

const GoogleButton = ({ onSocial }) => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: "email",
      });
    }

    gapi.load("client:auth2, start");
  }, []);

  const onSuccess = (response) => {
    console.log(response);
    window.location.href = "/dashboard";
  };

  const onFailure = (response) => {
    console.log(response);
  };

  return (
    <>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        isSignedIn={true}
      >
        <Box width={"calc(40vw)"}>
          <Typography
            fontFamily={"Prosto One"}
            fontWeight={900}
            fontSize="1.1rem"
            color="#808080"
          >
            구글계정으로 로그인하기
          </Typography>
        </Box>
      </GoogleLogin>
      {/* <GoogleLogout
        clientId={clientId}
        onLogoutSuccess={onLogoutSuccess}
      ></GoogleLogout> */}
    </>
  );
};

export default GoogleButton;
