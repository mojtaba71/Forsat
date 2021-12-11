import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      fontFamily: 'IRANSansWeb !important',
    },
    html: {
      fontSize: 10,
      [theme.breakpoints.up("sm")]: {
        fontSize: 10
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 12
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 14
      }
    }
  }
}));

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
