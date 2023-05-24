import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Typography, TextField, Button, Link } from "@mui/material";
import Paper from "@mui/material/Paper";
import Style from "../styles/Register.module.css";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
// import { useMediaQuery } from "@mui/material";

const Register = (props) => {
  const [formData, setFormData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    password: "",
    email: "",
    tel: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        created_ts: new Date().toISOString(),
        updated_ts: new Date().toISOString(),
        last_login_ts: new Date().toISOString(),
      }),
      redirect: "follow",
    };

    fetch("https://engine.raccoon-ai.io/auth/register", requestOptions)
    .then((response) => response.json())
    .then(data => {
        if (data.success) {
          toast.success("User added successfully11!");
          setSuccessMessage("Registration successful!");
          setErrorMessage("");
          router.push('/login'); 
        } else {
          setSuccessMessage("");
          /* setErrorMessage("User is already exist. Please login."); */
          toast.error("User is already exist11. Please login.");
          setErrorMessage("User is already exist11. Please login.");
          console.log("Login failed");
        }
      })
      .catch((error) => {
        setSuccessMessage("");
       
        console.log("error", error);
      });
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "100%",
    margin: theme.spacing(0),
  }));

  return (
    <Grid container>
      <Grid item display={{ xs: "none", sm: "block" }} sm={4}>
        <Item style={{ background: "#f2f2f2" }}>
          <Typography
            variant="h5"
            component="h5"
            padding={10}
            margin-top={10}
            margin-bottom={10}
            align="left"
            color="#9A9A9A"
            justify-content="flex-start"
          >
            Create Your Raccoon AI Account
          </Typography>

          <div>
            <img
              src="/images/articles/posts/SEEK Cover Image.png"
              alt=""
              height="auto"
              width="80%"
              component="img"
              padding="100px 100px"
              sx={{
                height: 233,
                width: 350,
                maxWidth: { xs: 350, md: 250 },
              }}
            />
          </div>
        </Item>
      </Grid>

      <Grid item xs={12} sm={8}>
      <Paper style={{ padding: 70, paddingTop: 40, paddingBottom: 40, minHeight:"90%" }}>
        <Typography variant="h6" component="h6" padding={0} align="left">
          Already have an Raccoon AI account?{" "}
          <Button>
            <Link href="/login" style={{ textDecoration: "underline" }}>
              Log in
            </Link>
          </Button>
        </Typography>

        <br />

        <form
          onSubmit={handleSubmit}
          style={{
            paddingLeft: 40,
            paddingRight: 40,
            justifyContent: "center",
          }}
        >
          
          <TextField
            label="First Name"
            margin="normal"
            id="outlined-basic"
            name="first_name"
            type="text"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            value={formData.first_name}
            onChange={handleInputChange}
            required
          />

          <br />

          <TextField
            label="Last Name"
            margin="normal"
            name="last_name"
            type="text"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            value={formData.last_name}
            onChange={handleInputChange}
            required
          />

          <TextField
            margin="normal"
            label="Email Address"
            id="email"
            name="email"
            type="email"
            variant="outlined"
            placeholder="Enter Your Email"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <br />

          <TextField
            margin="normal"
            label="Password"
            id="companyname"
            name="password"
            type="password"
            variant="outlined"
            placeholder="Enter Your password"
            fullWidth
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <br />

          <TextField
            margin="normal"
            label="Telephone Number"
            name="tel"
            type="number"
            variant="outlined"
            placeholder="Confirm Your strong Tel No"
            fullWidth
            value={formData.tel}
            onChange={handleInputChange}
            required
          />

          <br />
          <br />

          <Button
            type="submit"
            variant="contained"
            size="large"
            className={Style.btn}
          >
            Register
          </Button>
             {message && (
                      <Alert severity={severity} onClose={() => setMessage("")}>
                        {message}
                      </Alert>
                    )}

{successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} 

          <Toaster position="top-center" reverseOrder={false} />
        </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Register;


