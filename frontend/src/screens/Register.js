import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/slices/receptorSlice";
import Message from "../components/Message";
import Loader from "../components/Loader";

const Form = styled('form')(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
}));

const Paper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "left",
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const redirect = new URLSearchParams(location.search).get('redirect') || "/";
  const { userDetails, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (userDetails) {
      navigate(redirect);
    }
  }, [navigate, userDetails, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("As senhas não correspondem");
    } else {
      dispatch(createUser({ name, email, password }));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper>
        <Typography component="h1" style={{ fontWeight: "bold" }} variant="h5">
          Cadastrar
        </Typography>

        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                fullWidth
                id="name"
                label="Nome"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                fullWidth
                name="confirmPassword"
                label="Confirmar Senha"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <SubmitButton
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
          >
            Cadastrar
          </SubmitButton>
          <Grid container justifyContent="flex-start">
            <Grid item>
              Já tem uma conta?
              <Link
                to={redirect ? `/login?redirect=${redirect}` : "/login"}
                variant="body2"
              >
                {" "}Login
              </Link>
            </Grid>
          </Grid>
        </Form>
      </Paper>
    </Container>
  );
}

export default RegisterScreen;
