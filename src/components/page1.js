import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Box,
  Typography,
  makeStyles,
  Container,
  Grid
} from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  mobile:{
    marginTop:"10px",
    
  },
}));

export default function Page1() {
  const history=useHistory();
  const classes = useStyles();
  const formRef = React.useRef();
  const [value, setValue] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [pin, setPin] = useState();
  const Next = (e) => {
    e.preventDefault();
    if(formRef.current.reportValidity()){
      history.push("/page2")
    }
    else{
      formRef.current.reportValidity()
    }
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Page1
        </Typography>
          <form ref={formRef} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              type="email"
              autoFocus
            />
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Complete Address"
              name="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="email"
              type="email"
              autoFocus
            />

            <Grid container spacing={2}>
            <Grid item xs={8} sm={4}>
              <TextField
                autoComplete="State"
                name="State"
                variant="outlined"
                required
                fullWidth
                value={state}
              onChange={(e) => setState(e.target.value)}
                label="State"
                autoFocus
              />
            </Grid>
            <Grid item xs={8} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={city}
              onChange={(e) => setCity(e.target.value)}
                label="City"
                name="City"
                autoComplete="City"
              />
            </Grid>
            <Grid item xs={8} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={pin}
              onChange={(e) => setPin(e.target.value)}
                label="Pin Code"
                name="Pin"
                autoComplete="Pin"
                type="integer"
              />
            </Grid>
            </Grid>
            <PhoneInput
            className={classes.mobile}
              variant="outlined"
              margin="normal"
              required
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={Next}
            >
              Next
          </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
