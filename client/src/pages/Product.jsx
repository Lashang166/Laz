import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  FormControlLabel,
  Radio,
  FormControl,
  FormHelperText,
  FormLabel,
  RadioGroup,
  IconButton,
  Button,
} from "@material-ui/core";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { Header } from "../components/Header";
import Path from "../components/Path";
import Box from "../components/Box";
import Btn from "../components/Button";
import ProductCard from "../components/ProductCard";

import AddBoxIcon from "@material-ui/icons/AddBox";
import  IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";;







const useStyles = makeStyles((theme) => ({
  order: {
    color: "#f2f2f2",
    fontSize: "15px",
    padding: "8px 12px",
    position: "absolute",
    bottom: "8px",
    width: "100%",
    textAlign: "center",
  },
  arrow: {
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    width: "auto",
    marginTop: "-22px",
    padding: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
  },
  next: {
    right: "0",
    borderRadius: "3px 0 0 3px",
  },
  fade: {
    WebkitAnimationName: "fade",
    WebkitAnimationDuration: "1.5s",
    animationName: "fade",
    animationDuration: "1.5s",
  },
  detail: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "yellow",
    //heidht
  },
}));

const images = [
  "https://images.unsplash.com/photo-1612490020092-e4f7a3d17dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1611769864329-ef8d67d6cf78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
];

const Product = () => {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0);
  const [qty, setQty] = useState(1);

  const slideHandle = (type) => {
    if (type === "next") {
      if (currentImage < images.length - 1) {
        setCurrentImage(currentImage + 1);
      } else {
        setCurrentImage(0);
      }
    } else {
      if (currentImage == 0) {
        setCurrentImage(images.length - 1);
      } else {
        setCurrentImage(currentImage - 1);
      }
    }
    console.log(currentImage);
  };

  return (
    <div>
      <Header />
      <Path />
      <Container className="pt-3" style={{ backgroundColor: "white" }}>
        <Grid container spacing={1}>
          <Grid item lg={5}>
            <Grid container>
              <Grid item xs={2}>
                {images.map((img, index) => (
                  <div
                    className="my-1 cursor-pointer"
                    key={index}
                    onClick={() => setCurrentImage(index)}
                  >
                    <img src={img} className="min-w-full " />
                  </div>
                ))}
              </Grid>
              <Grid item xs={10}>
                <div className="w-96 relative m-auto bg-primary">
                  {/* image */}
                  <div className={`${classes.mySlidee} ${classes.fade}`}>
                    <div className="text-xs py-2 px-3 absolute top-0">
                      {" "}
                      1 / 3{" "}
                    </div>
                    <img
                      src={images[currentImage]}
                      alt="1"
                      className="w-full"
                    />
                  </div>
                  {/* prev next */}
                  <a
                    className={classes.arrow}
                    onClick={() => {
                      slideHandle("prev");
                    }}
                  >
                    &#10094;
                  </a>
                  <a
                    className={`${classes.arrow} ${classes.next}`}
                    onClick={() => {
                      slideHandle("next");
                    }}
                  >
                    &#10095;
                  </a>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={7} className="p-5">
            <div className="h-full px-10 lg:pb-20 flex flex-col justify-around">
              <div>
                <Typography variant="h4" compoent="b" color="initial">
                  เชิ้ตเข้ารูป supernoniron แขนยาว
                </Typography>
                <div className="flex mt-5">
                  <Typography variant="h5" compoent="b" color="primary">
                    THB 990.00
                  </Typography>
                  {/* <Rating name="read-only" value={3} readOnly /> */}
                </div>
                <Typography variant="subtitle1" className="mt-2">
                  บอกลาการรีดด้วยผ้าคอตตอน 100% ที่ให้สัมผัสสบาย
                  เสื้อเชิ้ตคุณภาพสูงที่เหมาะสำหรับสวมใส่ในทุกวัน
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography variant="h6">สี</Typography>
                <RadioGroup>
                  <div className="flex" >
                    <Radio 
                      value="a" 
                      icon={ <Box color="#f6685e" /> } 
                      checkedIcon={  <Box color="#f6685e" checked={true} /> }
                    />
                    <Radio 
                      value="ass" 
                      icon={ <Box color="#4dabf5" /> } 
                      checkedIcon={  <Box color="#4dabf5" checked={true} /> }
                    />
                    <Radio 
                      value="aa" 
                      icon={ <Box color="#ffeb3b" /> } 
                      checkedIcon={  <Box color="#ffeb3b" checked={true} /> }
                    />
                    

                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col">
              <Typography variant="h6">ขนาด</Typography>
                <RadioGroup>
                  <div className="flex" >
                    <Radio 
                      value="s" 
                      icon={ <Box>S</Box> } 
                      checkedIcon={   <Box checked={true} >S</Box > }
                    />
                    <Radio 
                      value="da" 
                      icon={ <Box>L</Box> } 
                      checkedIcon={   <Box checked={true} >L</Box > }
                    />
                    <Radio 
                      value="ad" 
                      icon={ <Box>M</Box> } 
                      checkedIcon={   <Box checked={true} >M</Box > }
                    />
                    <Radio 
                      value="add" 
                      icon={ <Box>XL</Box> } 
                      checkedIcon={   <Box checked={true} >XL</Box > }
                    />
                    
                  </div>
                </RadioGroup>
              </div>
              <div className="flex items-center ">
                <Typography variant="h6">จำนวน :</Typography>
                <div className="flex">
                  <IconButton
                    className="focus:outline-none text-xl"
                    onClick={() => (qty == 1 ? "" : setQty(qty - 1))}
                  >
                    <IndeterminateCheckBoxIcon
                      color="primary"
                      fontSize="large"
                    />
                  </IconButton>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-10 h-10 focus:outline-none text-xl mt-2 bg-blue-50 text-center"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  />
                  <IconButton
                    className="focus:outline-none"
                    onClick={() => setQty(qty + 1)}
                  >
                    <AddBoxIcon
                      color="primary"
                      fontSize="large"
                      className="focus:outline-none text-xl"
                    />
                  </IconButton>
                </div>
              </div>
              <div className="flex">
                <Btn>เพิ่มลงรถเข็น</Btn>
                <IconButton className="border-3 border-black">
                  <FavoriteBorderIcon style={{ fontSize: 30 }} />
                </IconButton>
              </div>
            </div>
          </Grid>

          <Grid xs={12}>
            {/* -----review---- */}
            <div className="w-full flex flex-col bg-yellowg-600 p-3 mt-7">
              <Typography variant="h5" className="text-2xl font-medium">
                Review
              </Typography>
              <div className="flex flex-col bg-gray-200 w-full  mt-4 rounded-sm">
                {/* { review && review.map((r, i) => ( */}
                <div className="flex bg-red-100d w-full p-6 space-x-6">
                  <div className="w-full min-h-44 max-h-full bg-gray-100 flex flex-col p-5">
                    <p className="text-lg font-bold">admin- 3/10/11</p>
                    <p className="text-gray-500 font-thin pt-3">asdfasdf</p>
                  </div>
                </div>
                {/* ))} */}

                <div className="flex bg-red-100d w-full p-6 space-x-6">
                  <div className="w-full min-h-44 max-h-full bg-gray-100f flex flex-col p-5">
                    <p className="text-lg font-bold">Your Review *</p>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      className="w-full mt-4 mb-2 rounded-sm focus:outline-none p-5"
                      placeholder="Your Review"
                    ></textarea>
                    <Btn classNamee="w-64 h-12 bg-black rounded-sm text-white uppercase mt-3">
                      Submit
                    </Btn>
                  </div>
                </div>
              </div>
            </div>
          </Grid>

          <Grid lg={12}>
            <div className="mt-3">
              <Typography variant="h5">Relate item</Typography>

              <Grid container spacing={4} style={{ marginTop: "10px" }}>
                <Grid item xs={3}>
                  <ProductCard />
                </Grid>
                <Grid item xs={3}>
                  <ProductCard />
                </Grid>
                <Grid item xs={3}>
                  <ProductCard />
                </Grid>
                <Grid item xs={3}>
                  <ProductCard />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Product;
