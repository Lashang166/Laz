import React, { useState, useEffect } from "react";
import {
  Card,
  makeStyles,
  Typography,
  IconButton,
  FormControl,
  Select,
  InputLabel,
  CardActionArea 
} from "@material-ui/core";

import { Link } from 'react-router-dom'

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PanoramaFishEyeTwoToneIcon from '@material-ui/icons/PanoramaFishEyeTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5px",
  },
  media: {
    maxHeight: "273px",
    maxWidth: "233px",
    minWidth: "100%",
  },
  img: {
    minWidth: "50%",
    objectFit: "cover",
  },
  content: {
    backgroundColor: "#fff",
    height: "73px",
    width: "100%",
    position: "relative",
    display: "flex",
    //paddingLeft: "5px",
  },
  btn: {
      height: "100%",
      padding: "10px",
      borderLeft: "1px solid lightgrey",
      display: "flex",
      left: "71%",
      top: 0,
      position: "absolute",
      backgroundColor: "#fff",
      transition: "0.3s",
      '&:hover': {
          zIndex: 2,
          width: "100%",
          left: 0
      }
  },


}));

const ProductCard = () => {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
  );

  const classes = useStyles();
  return (
    <Card className={classes.rooot}>
      <div className={classes.wrapper}>
        <div className={classes.media}>
          <CardActionArea className="focus:outline-none">
            <Link to={`/product/${"1"}`}> <img src={image} alt="5" /> </Link>
          </CardActionArea>
        </div>
        <div className={classes.content}>
              <CardActionArea className="focus:outline-none">
                    <Link to={`/product/${"1"}`}>
                    <div className="flex flex-grow flex-col p-2 pl-3">
                        <Typography variant="h5">
                            Lizard 
                        </Typography>
                        <Typography variant="subtitle1" className="mb-2">$199</Typography>
                    </div>
                    </Link>
              </CardActionArea>
          <div className={classes.btn}>
            <IconButton className="focus:outline-none">
              <AddShoppingCartIcon 
                color="secondary" 
                style={{ fontSize: 33}}
            />
            </IconButton>

            {/* -----form------- */}

            <FormControl className="w-14" style={{marginLeft: "2px"}} >
                <InputLabel >Size</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                native
                >
                    <option value={10}>S</option>
                    <option value={20}>M</option>
                    <option value={30}>L</option>
                    <option value={30}>X</option>
                    <option value={30}>XL</option>
                </Select>
            </FormControl>
     
            <FormControl className="w-14" style={{marginLeft: "5px"}} >
                <InputLabel >Color</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                native
                >
                    <option value={20}>M</option>
                    <option value={30}>L</option>
                    <option value={30}>X</option>
                    <option value={30}>XL</option>
                </Select>
            </FormControl>

          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
