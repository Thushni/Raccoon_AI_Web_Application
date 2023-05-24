import {
  Button,
  Container,
  Grid, 
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
  


} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useEffect, useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Head from "next/head";
import ReCAPTCHA from "react-google-recaptcha";
import { Formik, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

//import { useRouter } from "next/router";
import * as Yup from "yup";
import ProfileCard from "../components/ProfileCard";
//import Page2 from './Page2';

const login = (props) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [recaptchaResponse, setRecaptchaResponse] = useState("");
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    async function validateRecaptcha(recaptchaResponse) {
      const secret = "6LeyQ0UlAAAAABveRBTCShXbRmIe0JucaME1rrIg";
      const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptchaResponse}`;
      const response = await fetch(url, { method: "POST" });
      const data = await response.json();

      return data.success;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, recaptchaResponse }),
      redirect: "follow",
    };

   

    fetch("https://engine.raccoon-ai.io/auth/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // do something if success is true

          toast.success("User loged successfully!");
          setSeverity("success");
          router.push("/DashBoard");

          const Id = data.result.user.id;
          const Fname = data.result.user.first_name;
          const Lname = data.result.user.last_name;
          const Email = data.result.user.email;
          const PhoneNo = data.result.user.tel;
          const createDate = data.result.user.created_ts;
          
          console.log(Id);
          localStorage.setItem('userId', Id);
          localStorage.setItem('firstname', Fname);
          localStorage.setItem('lastname', Lname);
          localStorage.setItem('email', Email);
          localStorage.setItem('phoneno', PhoneNo);
          localStorage.setItem('createdate', createDate);

         

      
        } else {
          // do something if success is false
          toast.error("Login failed");
          console.log("Login failed");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js?&render=explicit"
          async
          defer
        ></script>
      </Head>

      <div style={{ width: 700, marginTop: 400, margin: "80px auto" }}>
        <Container style={{ width: "900" }} maxWidth="xl">
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="top"
            style={{ minHeight: "80vh" }}
          >
            <Paper elevation={2} sx={{ padding: 5 }}>
              <Grid container direction="column" spacing={2}>
                <Formik
                /*  initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema} */
                >
                  {(props) => (
                    <form onSubmit={handleLogin}>
                      <Grid item>
                        <Typography
                          variant="h5"
                          component="h5"
                          padding={1}
                          paddingLeft={0}
                          marginLeft={1}
                          marginTop={0}
                          color="#9A9A9A"
                          justify-content="flex-start"
                        >
                          Login to Raccoon AI
                        </Typography>
                      </Grid>
                      <br />

                      <Grid item>
                        <TextField
                          type="email"
                          fullWidth
                          id="email"
                          label="Email"
                          placeholder="Enter Your Email"
                          variant="outlined"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        ></TextField>
                      </Grid>

                      <br />

                      <Grid item>
                        <TextField
                          type="password"
                          fullWidth
                          label="Password"
                          placeholder="Enter Your Password"
                          variant="outlined"
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                /*  onClick={handlePassVisibility}
                                aria-label="toggle password"
                                edge="end" */
                                >
                                  {/* {values.showPass ? (
                                  <VisibilityOffIcon />
                                ) : (
                                  <VisibilityIcon />
                                )} */}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          helperText={<ErrorMessage name="password" />}
                        ></TextField>
                      </Grid>

                      <br />

                      <Grid item>
                        <ReCAPTCHA
                          /*  ref={recaptchaRef} */
                          class="g-reCaptcha"
                          fullWidth
                          sitekey="6LeyQ0UlAAAAAFMYDehQ5dROREX-FRO3TuKqFNCj"
                          render="explicit"
                          theme="light"
                          /*  onloadCallback={recaptchaLoaded}
                      verifyCallback={verifyCallback} */
                          // onChange={this.handleOnchange}
                        />

                        <br />

                        <Button
                          variant="contained"
                          fullWidth
                          type="submit"
                          justifyContent="center"
                          alignItems="center"
                          size="large"
                          onClick={handleLogin}
                        >
                          LOGIN <ArrowForwardRoundedIcon />
                        </Button>
                      </Grid>
                    </form>
                  )}
                </Formik>

                <br />

                <Grid item spacing={2}>
                  <Typography component="spam" padding={3}>
                    Do not have an account?
                    <Button>
                      <Link
                        href="/register"
                        style={{ textDecoration: "underline" }}
                      >
                        Create an Raccoon AI Account
                      </Link>
                    </Button>
                    <Toaster position="top-center" reverseOrder={false} />
                    {message && (
                      <Alert severity={severity} onClose={() => setMessage("")}>
                        {message}
                      </Alert>                                        
                    )}


                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default login;
