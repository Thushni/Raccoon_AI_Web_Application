import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
//import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import styles from "../styles/Home.module.css";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ProfileCard(props) {
  const [userData, setUserData] = useState({});

  const userId = localStorage.getItem("userId");
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");
  const email = localStorage.getItem("email");
  const phoneno = localStorage.getItem("phoneno");
  const createdate = localStorage.getItem("createdate");

  useEffect(() => {
    fetch(
      "http://localhost:8000/auth/users/get/4d54e9dc-46fa-4131-b36f-4ce5a99dce85"
    )
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box sx={{ flexGrow: 0 }} >
      <Grid container spacing={2} style={{ backgroundColor:"#d4f4f4" }}>
        <Grid item xs={16} style={{ minWidth: "250px", backgroundColor:"#d4f4f4" }} >
          <Item style={{ backgroundColor:"#d4f4f4" }}>
            <img
              style={{ marginTop: "-15px" }}
              src="/images/profile2.png"
              width="100"
              height="100"
            ></img>
            <h3 style={{ marginTop: "-9px", fontSize:"15px", fontWeight:700, color:"black" }}>{firstname}</h3>
            <hr style={{ height:"1px", background:"black" }}></hr>

            <div style={{ textAlign: "left", fontSize:"13px", color:"#525252"  }}>
              {/*  <FacebookIcon sx={{ fontSize: 30 }}></FacebookIcon> */}
              <h3> Last Name : </h3>
              <h4 style={{ marginTop: "-15px" }}>{lastname} </h4>

              <h3> Email : </h3>
              <h4 style={{ marginTop: "-15px" }}>{email} </h4>

              <h3> Contact No : </h3>
              <h4 style={{ marginTop: "-15px" }}>{phoneno} </h4>

              <h3> Created Date : </h3>
              <h4 style={{ marginTop: "-15px" }}>{createdate}</h4>
            </div>

          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfileCard;
