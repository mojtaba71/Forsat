import React, { useState, useEffect } from "react";
import {
  Grid,
  OutlinedInput,
  FormControl,
  Button,
  IconButton,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "../../Utils/HookForm/TextInput";
import { LoginStyle } from "./LoginStyle";
import Logo from "../../logo.svg";
import Img from "../../Assets/images/log1.png";
import { useHistory } from "react-router";
import LoginServices from "../../Services/Login/LoginServices";
import { IUserData, ILoginData } from "../../Models/Login/Login";
import { SetToken } from "../../Utils/AxiosHelper/AxiosHelper";
import { toast } from "react-toastify";
import SubmitButton from "../../Utils/HookForm/SubmitButton";
import { Carousel } from "react-responsive-carousel";
import background from "../../Assets/images/background.svg";
import Slide1 from "../../Assets/images/img-1.svg";
import Slide2 from "../../Assets/images/img-2.svg";
import Slide3 from "../../Assets/images/img-3.svg";
import { slider } from "./SliderItems";

const Login = () => {
  const history = useHistory();
  const classes = LoginStyle();

  const schema = yup.object().shape({
    // username: yup.string().nullable().required(),
    // password: yup.string().nullable().required(),
  });

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<IUserData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const loginHandler = (values: IUserData) => {
    console.log(values);
    if (values.username === "admin") {
      history.push("/main");
    }
    let test = {
      username: "soorimess",
      password: "my_secure_password2",
    };
    LoginServices.Login(test, (res: ILoginData) => {
      if (res.success) {
        localStorage.setItem("token", res.token);
        SetToken(res.token);
        history.push("/main");
      } else {
        toast.error(res.success);
      }
    });
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      className={classes.LoginContainer}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPositionY: "50%",
        height: "100vh",
      }}
    >
      <Grid container xs={6} justifyContent="center" alignItems="center">
        <form
          onSubmit={handleSubmit(loginHandler)}
          className={classes.shadowedGrid}
          id="login-form"
        >
          <h1 className="mb-4">سامانه تایید امضاهای دست نویش چک های بانکی</h1>
          <Grid item>
            <TextInput
              name="username"
              isHeaderTable
              label={"userName"}
              control={control}
              error={!!errors.username}
              helpText={errors?.username?.message}
            />
          </Grid>
          <Grid item>
            <TextInput
              name="password"
              isHeaderTable
              label={"password"}
              control={control}
              error={!!errors.password}
              helpText={errors?.password?.message}
              type="password"
            />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              fullWidth
              variant="contained"
              type="submit"
              color="primary"
              className="mt-4"
            >
              {"ورود"}
            </Button>
          </Grid>
        </form>
      </Grid>
      <Grid container xs={6} justifyContent="center" alignItems="center">
        <Grid
          container
          justifyContent="center"
          style={{ width: "50%", direction: "ltr" }}
        >
          <Carousel
            autoPlay
            showArrows={false}
            showStatus={false}
            showThumbs={false}
          >
            <div>{slider.slide1}</div>
            <div>{slider.slide2}</div>
            <div>{slider.slide3}</div>
          </Carousel>
          <h2>تطلبق با لیست امضاها و شباهت سنجی</h2>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
