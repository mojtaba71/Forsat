import { FC, Fragment, ReactNode, useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Avatar, Grid, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { sidebarStyle } from "./SidebarStyle";
import SidebarItemsList from "../../Constants/sidebarItems";
import { SidebarItems } from "../../Models/Sidebar/Sidebar";
import { Link } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";
import { useHistory } from "react-router-dom";

interface IProps {
  children?: ReactNode;
}
const Sidebar: FC<IProps> = ({ children }) => {
  const theme = useTheme();
  const classes = sidebarStyle(theme);
  const [open, setOpen] = useState(true);
  const [render, setRender] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const sidebarSwitch = () => {
    setOpen(!open);
  };

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const themeHandler = () => {
    const theme = localStorage.getItem("themeType");

    if (theme === "dark") {
      localStorage.setItem("themeType", "light");
    } else {
      localStorage.setItem("themeType", "dark");
    }
    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar)}
        style={{
          width: `${open ? "calc(100% - 200px)" : "calc(100% - 65px)"}`,
        }}
      >
        <Grid container>
          <Grid item xs={3}>
            <Toolbar></Toolbar>
          </Grid>
          <Grid container xs={8} justifyContent="flex-end" alignItems="center">
            <Typography color="primary">نام کاربری</Typography>
            <IconButton onClick={handleMenu} color="inherit">
              <AccountCircle fontSize="large" color="primary" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>{"پروفایل"}</MenuItem>
              <MenuItem onClick={handleLogout}>{"خروج"}</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={sidebarSwitch}
            edge="start"
          >
            <MenuIcon color="secondary" />
          </IconButton>
        </div>
        <Grid
          container
          className={classes.sidebarHeader}
          justifyContent="center"
        >
          <Grid container item xs={12} justifyContent="center">
            <Typography display="block" component="h5" color="secondary">
              admin
            </Typography>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <Typography display="block" component="p" color="secondary">
              test@gmail.com
            </Typography>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <Avatar
              className={classes.avatar}
              alt="user"
              src="../../../public/logo192.png"
              sizes="large"
            />
          </Grid>
        </Grid>
        {SidebarItemsList?.map((item: SidebarItems, index: number) => {
          if (item.menu.type === 1) {
            return (
              <>
                <Link
                  to={item.menu.url}
                  key={index}
                  className={classes.menuLink}
                >
                  <List>
                    <ListItem button key={item.menu.menuTitle}>
                      <ListItemIcon>{item.menu.menuIcon()}</ListItemIcon>
                      <ListItemText
                        primary={item.menu.menuTitle}
                        style={{ display: `${open ? "block" : "none"}` }}
                      />
                    </ListItem>
                  </List>
                </Link>
                <Divider />
              </>
            );
          } else if (item.menu.type === 2) {
            return (
              <Fragment key={index}>
                <List
                  onClick={() => {
                    item.menu.open = !item.menu.open;
                    setRender(!render);
                  }}
                >
                  <ListItem button key={item.menu.menuTitle}>
                    <ListItemIcon>{item.menu.menuIcon()}</ListItemIcon>
                    <ListItemText
                      primary={item.menu.menuTitle}
                      style={{ display: `${open ? "block" : "none"}` }}
                    />
                    {open && (
                      <Grid container justifyContent="flex-end">
                        {!item.menu.open ? (
                          <ExpandMoreIcon />
                        ) : (
                          <ExpandLessIcon />
                        )}
                      </Grid>
                    )}
                  </ListItem>
                </List>
                <div className={open ? classes.menuChildCntainer : ""}>
                  {item.menu.open &&
                    item.childs.map((child, index) => (
                      <Fragment key={index}>
                        <Link to={child.menu.url} className={classes.menuLink}>
                          <List>
                            <ListItem button key={child.menu.menuTitle}>
                              <ListItemIcon>
                                {child.menu.menuIcon()}
                              </ListItemIcon>
                              <ListItemText
                                primary={child.menu.menuTitle}
                                style={{
                                  display: `${open ? "block" : "none"}`,
                                }}
                              />
                            </ListItem>
                          </List>
                        </Link>
                      </Fragment>
                    ))}
                </div>
                <Divider />
              </Fragment>
            );
          }
        })}
      </Drawer>
      <div style={{ overflow: "auto", width: "100%" }}>
        <main className={classes.content}>
          <div style={{ marginTop: "60px" }} />
          <Grid>{children}</Grid>
        </main>
      </div>
    </div>
  );
};
export default Sidebar;
