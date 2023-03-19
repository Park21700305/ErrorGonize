import React, { useCallback, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { Box, Typography } from "@mui/material";
import { gapi } from 'gapi-script';

const clientId =
    '555630715109-et9a11ivurav2a87vqi58vmupuc945os.apps.googleusercontent.com';



const GoogleBtn_Test = ({ onSocial }) => {
  let check = false;
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: 'email',
      })
    }

    gapi.load('client:auth2, start');
  }, []);

  
  const logout = () => {
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("user_email");
    window.localStorage.removeItem("user_name");
  }

  const onSuccess = (response) => {
    check = true;
    console.log(response);
  };

  const onFailure = (response) => {
    console.log(response);
  };

  return (
    <Box>
      {check === false ? (
         <GoogleLogin
         clientId={clientId}
         // buttonText="구글계정으로 로그인하기"
         onSuccess={onSuccess}
         onFailure={onFailure}
     >
         <Box>
             <Typography
                 fontFamily={"Prosto One"}
                 fontWeight={900}
                 fontSize="1.1rem"
                 color="#808080"
             >
                 구글계정으로 로그인하기
             </Typography>
         </Box>
         <Box>
             Sign in. Use your Google Account
         </Box>
     </GoogleLogin>
      ) : (
        <GoogleLogout
          clientId={clientId}
          buttonText="로그아웃"
          onLogoutSuccess={logout}
        />
      )}
    </Box>
  );
};

export default GoogleBtn_Test;