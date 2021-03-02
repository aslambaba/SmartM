import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Row, Col } from 'react-bootstrap';
import './style/login.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Smart Managment
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Login() {

  return (
      <Row>
        <Col lg={6} md={8} sm={12} xs={12} >
          <div className='LoginContainer'>
            <CssBaseline />
            <h2 className='mainheading'>Smart Managment System</h2>
            <div className='paper'>
              <Typography component="h1" variant="h5">
                Sign in
            </Typography>
              <form className='form' noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className='submit'
                >
                  Login
          </Button>
              </form>
            </div>
          </div>
        </Col>
        <Col lg={6} md={4} sm={12} xs={12} >
          <div className='InstituteIcon'>
          </div>
        </Col>
      </Row>

  );
}