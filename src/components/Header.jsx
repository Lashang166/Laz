import React, {useState} from 'react'
import { 
        Container, 
        Grid, 
        makeStyles, 
        InputBase, 
        IconButton,
        Badge,
        Modal} from "@material-ui/core";

import { Link } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundColor: "#f7f7f7",
    background: "#fff",
    color: "#9e9e9e",
    minHeight: "80px",
    paddingTop: "5px",
    borderBottom: "1px solid lightgray"
  },
  search: {
      background: "#eff0f5",
      width: "90%",
      paddingLeft: "8px"
  },
  searchBtn: {
    background: theme.palette.primary.main,
    color: "#Fff"
  },
  shopMenu: {
      margin: "5px 0"
  },
  list: {
      marginLeft: "20px",
      color: "#9e9e9e",
      textDecoration: "none"
  },
  navAction: {
      paddingTop: "15px"
  }
}));




export const Header = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Container>
        <Grid container alignItems="center" style={{background: ""}}>
          <Grid item xs={3}>
            <div className="logo">
              <img 
                src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1KB2laMFY.1VjSZFnXXcFHXXa.png" 
                alt=""
                width ="150px"
                height="50px" />
            </div>
          </Grid>
          <Grid item xs>
            <div className={classes.navAction}>
                <InputBase 
                    placeholder="Search"
                    className={classes.search}
                    endAdornment={
                        <div className={classes.searchBtn}>
                            <IconButton>
                                <SearchIcon style={{ color: "#fff"}}/>
                            </IconButton>
                        </div>
                    }
                />
                <div className={classes.shopMenu}>
                    <Link to="/shop"  >สินค้ามาใหม่</Link>
                    <Link to="/shop"  className={classes.list}>เสื้อผ้า</Link>
                    <Link to="/shop"  className={classes.list}>รองเท้า</Link>                      
                    <Link to="/shop" className={classes.list}>สินค้าทั้งหมด</Link>                      
                </div>
            </div>
          </Grid>
          <Grid item >
              <IconButton>
                  <Badge color="error" badgeContent={4}>
                      <ShoppingCartOutlinedIcon color="secondary"  style={{fontSize: "28px"}}/>
                  </Badge>
              </IconButton>
              <IconButton>
                  <Badge color="error" badgeContent={4}>
                      <NotificationsOutlinedIcon color="secondary" style={{fontSize: "28px"}}/>
                  </Badge>
              </IconButton>
              <IconButton >
                  <Link to="/user/login">
                    <Badge color="secondary">
                        <AccountCircleOutlinedIcon color="secondary"  style={{fontSize: "28px"}}/>
                    </Badge>
                  </Link>
              </IconButton>
          </Grid>
        </Grid>

      </Container>
    </div>
  );
};
