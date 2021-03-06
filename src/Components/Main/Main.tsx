import { useEffect, ReactNode, FC } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import routes from "../../Router/Router";
import { useDispatch, useSelector } from "react-redux";

interface IProps {
  children?: ReactNode;
}

const Main: FC<IProps> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <Sidebar>
      <Grid>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                exact
                path={route.path}
                key={index}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Grid>
    </Sidebar>
  );
};

export default Main;
