import React from 'react'

const Login = (props) => {
  const CLIENT_ID = "c0b0344d50bd4d8a979fe565d299d42f";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

//   const {AUTH_ENDPOINT,CLIENT_ID,REDIRECT_URI,RESPONSE_TYPE} =props
  return (
    <div>
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to your spotify account</a>
    </div>
  )
}

export default Login




