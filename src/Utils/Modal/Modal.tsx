import React from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogProps,
  DialogContentText,
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const Styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .cancelButton": {
        height: 31,
        backgroundColor: "#323441",
        borderRadius: 15,
        color: "#fff",
        margin: 5,
        padding: "2px 30px",
        fontSize: 13,
        "& span": {
          color: "#bababa",
        },
      },
      "& .addButton": {
        height: 31,
        margin: 5,
        padding: "2px 30px",
        fontSize: 13,
      },
    },
    body: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      color: theme.customColors.title,
    },
    dialogue: {
      color: theme.customColors.title,
    },
  })
);

interface IProps {
  title?: string;
  description?: string;
  body?: any;
  action?: any;
  open: boolean;
  handleClose(show: boolean): void;
  yes?: boolean;
  no?: boolean;
  exit?: boolean;
  fullWidth?: boolean;
  maxWidth?: any;
  dividers?: boolean;
}

const Modal: React.FC<IProps> = ({
  title,
  description,
  body,
  action,
  open,
  handleClose,
  fullWidth,
  maxWidth,
  dividers,
}) => {
  const scroll: DialogProps["scroll"] = "paper";
  const classes = Styles();

  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      scroll={scroll}
      aria-labelledby="form-dialog-title"
      aria-describedby="scroll-dialog-description"
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      className={classes.root}
    >
      <div className={classes.body}>
        {title && (
          <>
            <DialogTitle className={classes.title} id="scroll-dialog-title">
              {title}
            </DialogTitle>
            <hr />
          </>
        )}
        <DialogContent className={classes.dialogue} dividers={dividers}>
          {description && (
            <DialogContentText className={classes.dialogue}>
              {description}
            </DialogContentText>
          )}
          {body}
        </DialogContent>
        <DialogActions>{action}</DialogActions>
      </div>
    </Dialog>
  );
};

export default Modal;
