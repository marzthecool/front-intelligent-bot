import React from "react";
import { Link as RouterLink } from "react-router-dom";
// fix
import { Container, Typography, Link, Box } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 580,
  padding: 65,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
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

const Login = ({ setAuth }) => {
  const { t } = useTranslation();
  return (
    <RootStyle>
      <Container maxWidth="md" sx={{border: 1}}>
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
          <Typography variant='h3' align='center'>
            {t("login_title")}
          </Typography>
          <Typography component={motion.p} {...fadeInUp} variant="body2" align="center" sx={{marginBottom: 3}}>
            {t("login_subtitle_1")}
            <Link variant="subtitle2" component={RouterLink} to="/signup" sx={{color: 'black'}}>
              {t("login_subtitle_link")}
            </Link>
            {t("login_subtitle_2")}
          </Typography>
          </HeadingStyle>
          {/*Secuencia completa de Login*/}
          <LoginForm setAuth={setAuth} />
          {/*Texto inferior*/}
          
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
