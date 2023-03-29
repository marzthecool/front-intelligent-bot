import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box } from "@mui/material";
import styled from "@emotion/styled";
import SignupForm from "../components/SignupForm";
import { motion } from "framer-motion";

//////////////////////////////////
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled(Box)({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Signup = ({ setAuth }) => {
  return (
    <RootStyle>
      <Container maxWidth="sm" sx={{border: 1}}>
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
          <Typography variant='h3' align='center' sx={{marginBottom: 1, marginTop: 3}}>
            Crear nueva cuenta
          </Typography>
          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="center"
            sx={{marginBottom: 3}}
          >
            ¿Ya tienes una cuenta?{" "}
            <Link variant="subtitle2" component={RouterLink} to="/login" sx={{color: 'black'}}>
              Iniciar Sesión
            </Link>
          </Typography>
          </HeadingStyle>
          <SignupForm setAuth={setAuth} />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Signup;
