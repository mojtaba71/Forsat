import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";

const drawerWidth = 200;

export const sidebarStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      background: theme.customColors.main,
      height: "100vh",
      overflowX: "hidden",
      width: "100%",
    },
    mainOpen: {
      marginLeft: "170px",
    },
    mainClose: {
      marginLeft: "20px",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      display: "-webkit-box",
      background: theme.customColors.main,
      boxShadow: "-6px 8px 22px 3px rgba(0,0,0,0.33) !important",
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      zIndex: 99999999,
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(8) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(8) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      background: theme.customColors.green,
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    menuChildCntainer: {
      paddingLeft: 10,
    },
    menuLink: {
      textDecoration: "unset",
    },
    test: {
      display: "inline",
      position: "absolute",
      right: 15,
    },
    content: {
      flexGrow: 1,
      padding: "10px 10px 5px 10px",
      width: "100%",
      overflow: "hidden",
      background: theme.customColors.main,
    },
    sidebarHeader: {
      background: theme.customColors.green,
      height: "120px",
      marginBottom: "40px",
    },
    avatar: {
      border: "3px solid #fff",
      marginTop: "45px",
      width: "60px",
      height: "60px",
    },
  })
);
