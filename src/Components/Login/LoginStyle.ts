import { makeStyles, Theme, createStyles } from "@material-ui/core";
import LoginBg from "../../Assets/images/loginBg.jpg";

export const LoginStyle = makeStyles((theme: Theme) =>
  createStyles({
    loginCard: {
      // background:`linear-gradient(${theme.palette.neutral?.main}, ${theme.palette.neutral?.dark})`,
      padding: "15px",
      borderRadius: "15px",
      backdropFilter: "blur(5px) brightness(0.95) contrast(0.8) invert(0)",
    },
    LoginContainer: {
      background: "#f9f9f9",
    },
    shadowedGrid: {
      height:"457px",
      padding:"20px",
      boxShadow:"0px 0px 30px 5px rgb(0 0 0 / 10%)"
      // height: "457px",
      // padding: "20px",
      // boxShadow: "0px 0px 30px 5px rgb(0 0 0 / 10%)",
    },
  })
);
