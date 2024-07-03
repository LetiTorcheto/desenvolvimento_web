import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/receptorSlice";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/Form";

const useStyles = styled((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login({ location, history }) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // Determine redirect path from query params; default to '/'
  const redirect = location && location.search ? location.search.split("=")[1] : "/";

  // Select user state from Redux store
  const userLogin = useSelector((state) => state.user);
  const { userDetails, loading, error } = userLogin;

  // Redirect if user is logged in and userDetails exist
  useEffect(() => {
    if (userDetails) {
      history.replace(redirect);
    }
  }, [history, userDetails, redirect]);

  // Handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <Typography component="h1" style={{ fontWeight: "bold" }} variant="h5">
        Entrar
      </Typography>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <form className={classes.form} onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="filled"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          color="primary"
          className={classes.submit}
        >
          Login
        </Button>
        <Grid container justify="flex-start">
          <Grid item>
            Novo Usuario?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
              variant="body2"
            >
              Cadastrar
            </Link>
          </Grid>
        </Grid>
      </form>
    </FormContainer>
  );
}

export default Login;
