import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: theme.palette.primary.main,
    fontSize: "18px",
    width: "240px",
   // padding: "4px 2px",
    color: "#fff",
    transition: ".3s",
    "&:hover": {
      backgroundColor: theme.palette.third.light,

    }
  }
}));

const Btn = (props) => {
  const classes = useStyles();

  return (
    <button className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Btn;
