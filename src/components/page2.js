import React, { useState } from 'react';
import {Avatar,Button,CssBaseline,TextField,Link,Grid,Box,Typography,makeStyles,Container} from '@material-ui/core';


import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const Submit=(e)=>{
    e.preventDefault()
  }

  const [gdrive,setGdrive]=useState();
  const [github,setGithub]=useState();
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Page 2
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Google drive"
            name="gdrive"
            value={gdrive}
            onChange={(e) => setGdrive(e.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Github Link"
            name="github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            autoFocus
          />
          <div className={classes.form}>
          <label>Upload Resume</label>
          <br />
          <input className type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])} />
          </div>
          
    
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={Submit}
          >
            Submit
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/page1" variant="body2">
                Back
              </Link>
            </Grid>
          
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}