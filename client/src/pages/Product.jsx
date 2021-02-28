import { useState, useEffect } from 'react'
import Header from '../components/Headers'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CardItem from "../components/CardItem";
import axios from 'axios'
import { 
        Container, 
        Grid, 
        Fade, 
        Typography,
        Radio, 
        RadioGroup, 
        IconButton} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import CartActions from '../actions/cartActions'
import { useSelector, useDispatch } from 'react-redux'
import Box from "../components/Box";

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

const Product = (props) => {
    const classes = useStyles();
    const id = props.match.params.id;
    const dispatch = useDispatch()
    const { cartItems, } = useSelector(state => state.cartState)
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true)
    const [qty, setQty] = useState(1);

    const [product, setProduct] = useState(null);
    const [images, setImages] = useState([]);
    const [size, setSize] = useState("")
    const [color, setColor] = useState("")


    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
    
        axios
          .get(`/api/product/get/${id}`, { cancelToken: source.token })
          .then((res) => {
              console.log(res.data);
            setProduct(res.data.product);
            // setColor(res.data.product.colors[0])
            // setSize(res.data.product.variation[0])
          })
          .catch((err) => {
            if (axios.isCancel(err)) {
              return "axios request cancelled"
            }
            return err
          });
    
        return () => {
          source.cancel();
        };
    }, [])



    const slideHandle = (type) => { 
        setFade(false)
        setTimeout(() => {
            setFade(true)
        }, 150)
    
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
       product && ( <div>
            <Header />
            <Container className="bg-white mt-3">
                <Grid container spacing={1}>
                    <Grid item lg={5}>
                    <Grid container spacing={1}>
                        <Grid item xs={2}>
                            {product.images.map((img, index) => (
                            <div
                                className="my-1 cursor-pointer"
                                key={index}
                                onClick={() => setCurrentImage(index)}
                            >
                                <img 
                                        src={`/assets//images/${img.substr(img.indexOf("file"), img.length + 1)}`}
                                        className="min-w-full " />
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
                                <Fade in={fade}>
                                    <img
                                        src={`/assets//images/${product.images[currentImage].substr(product.images[currentImage].indexOf("file"), product.images[currentImage].length + 1)}`}
                                        alt="1"
                                        className="w-full"
                                    />
                                </Fade>
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
                             { product.title }
                            </Typography>
                            <div className="flex mt-5">
                            <Typography variant="h5" compoent="b" color="primary">
                                THB {product.price}
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
                            {product.colors.map((s, i) => (
                                <Radio 
                                    onClick={() => setColor(s)}
                                    value={s} 
                                    key={i}
                                    icon={ <Box color="#f6685e" >{s}</Box> } 
                                    checkedIcon={  <Box color="#f6685e" checked={true} >{s}</Box> }
                                />
                            ))}

                            </div>
                            </RadioGroup>
                        </div>
                        <div className="flex flex-col">
                        <Typography variant="h6">ขนาด</Typography>
                            <RadioGroup>
                            <div className="flex" >
                                {product.variation.map((s, i) => (
                                    <Radio 
                                        onClick={() => setSize(s)}
                                        value={s} 
                                        key={i}
                                        icon={ <Box color="#f6685e" >{s}</Box> } 
                                        checkedIcon={  <Box color="#f6685e" checked={true} >{s}</Box> }
                                    />
                                ))}
                            </div>
                            </RadioGroup>
                        </div>
                        <div className="flex items-center ">
                            <Typography variant="h6">จำนวน :</Typography>
                            <div className="flex">
                            <IconButton
                                className="focus:outline-none text-xl"
                                onClick={() => qty !== 0 ? setQty(qty - 1) : "" }
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
                                className="w-10 h-10 focus:outline-none text-xl mt-2 bg-gray-200 text-center"
                                value={qty}
                                onChange={(e) => e.target.value < product.countInStock ? setQty(e.target.value) : setQty(product.countInStock)}
                            />
                            <IconButton
                                className="focus:outline-none"
                                onClick={() => qty < product.countInStock ? setQty(qty + 1) : null}                            >
                                <AddBoxIcon
                                    color="primary"
                                    fontSize="large"
                                    className="focus:outline-none "
                                />
                            </IconButton>
                            </div>
                        </div>
                        <div className="flex flex-col mb-3">
                            <Typography variant="body1">จำนวนในสต็อก : {product.countInStock} ชิ้น</Typography>
                            <Typography variant="body1">ประเภท : {product.category.category}</Typography>
                            <Typography variant="body1">แบรนด์ : {product.brand.name}</Typography>
                            <Typography variant="body1">ขายไปแล้ว : {product.soldCount} ชิ้น</Typography>
                        </div>
                        <div className="flex">
                            <button 
                                style={{background: "#ee4d2d"}} 
                                class=" w-full sm:w-1/2 flex items-center justify-center rounded-md  text-white text-xl" 
                                type="submit"
                                onClick={() => dispatch(CartActions.add(product, color, size, qty, cartItems))}

                                >Buy now</button>
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
                                <button 
                                    style={{background: "#ee4d2d"}} 
                                    class="w-3/4 sm:w-1/4 flex items-center justify-center rounded-md  h-10 mt-1  text-white text-xl" 
                                    type="submit"
                                    >Submit</button>

                            </div>
                            </div>
                        </div>
                        </div>
                    </Grid>

                    <Grid item lg={12}>
                        <div className="mt-3">
                        <Typography variant="h5">Relate item</Typography>

                        <Grid container spacing={4} style={{ marginTop: "10px" }}>
                           <Grid item xs={3}>
                               <CardItem />
                           </Grid>
                           <Grid item xs={3}>
                               <CardItem />
                           </Grid>
                           <Grid item xs={3}>
                               <CardItem />
                           </Grid>
                        </Grid>
                        </div>
                    </Grid>

                </Grid>
            
            
            
            </Container>
        </div>
        )
    )
}

export default Product
