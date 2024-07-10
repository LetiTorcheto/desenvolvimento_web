import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Typography, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/receptorSlice";
import Message from "../components/Message";
import Loader from "../components/Loader";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const redirect = new URLSearchParams(location.search).get('redirect') || "/";

  const userLogin = useSelector((state) => state.user);
  const { userDetails, loading, error } = userLogin;

  useEffect(() => {
    if (userDetails) {
      navigate(redirect, { replace: true });
    }
  }, [navigate, userDetails, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container component="main" maxWidth="xs">
      <div style={{ marginTop: "8vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography component="h1" variant="h5" style={{ fontWeight: "bold" }}>
          Entrar
        </Typography>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <form style={{ width: "100%", marginTop: "1vh" }} onSubmit={submitHandler}>
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
            style={{ margin: "3vh 0 2vh" }}
          >
            Login
          </Button>
          <Grid container justifyContent="flex-start">
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
      </div>
    </Container>
  );
}

export default LoginScreen;
