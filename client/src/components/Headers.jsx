import React from 'react'

import { 
    Container, 
    Grid, 
    makeStyles, 
    InputBase, 
    IconButton,
    Badge,
     Typography
    } from "@material-ui/core";

import { Link } from 'react-router-dom'

import Popover from '@material-ui/core/Popover';

import SearchIcon from '@material-ui/icons/Search';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

const user = {
    iseAuthenticated: false
}

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#fff",
        color: "#fff",
        minHeight: "100px",
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
        paddingTop: "15px",
        marginLeft: "60px"
    },
    popover: {
        pointerEvents: 'none',
      },
      paper: {
        padding: theme.spacing(1),
      },
}))



const Headers = () => {
    const classes = useStyles()


    return (
        <div className={classes.root}>
    
            <Container>
              <Grid container >
                    <Grid item  xs={2}>
                        <div className="logo">
                            <img 
                                src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1KB2laMFY.1VjSZFnXXcFHXXa.png" 
                                alt=""
                                width ="150px"
                                className="mt-4"
                                height="50px" />
                        </div>
                    </Grid>
                    <Grid item xs={9}>
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
                        </div>
                    </Grid>
                    <Grid item xs={1}  className="flex pt-3 bg-red-500d w-full justify-end">
                        <IconButton
                            
                        >
                            <Link to="/cart">
                                <Badge color="error" badgeContent={4}>
                                    <ShoppingCartOutlinedIcon color="secondary"  style={{fontSize: "28px"}}/>
                                </Badge>
                            </Link>

                          

                        </IconButton>
                        {user.isAuthemticated ? 
                            <IconButton>
                                <Badge color="error" badgeContent={4}>
                                    <NotificationsOutlinedIcon color="secondary" style={{fontSize: "28px"}}/>
                                </Badge>
                            </IconButton>
                            : null
                        }
                        <IconButton >
                            <Link to={user.isAuthenticated ? `/user/dashboard`: `/user/login`}>
                                <Badge color="secondary">
                                    <AccountCircleOutlinedIcon color="secondary"  style={{fontSize: "28px"}}/>
                                </Badge>
                            </Link>
                        </IconButton>    
                    </Grid>

                    
              </Grid>
              </Container>
             
                <div style={{background: "#f36e36"}} className=" flex h-10 mt-3 text-white px-10">
                    <Container style={{ display: "flex", justifyContent: "space-between", alignItem: "center"}}>
                    <Typography className="pt-2" variant="subtitle1" color="initial">All Category</Typography>
                        <ul className="flex text-xl w-2/5 h-full pt-2 bg-red-200v  justify-around font-medium">
                            <li className="px-10 text-white"><Link to="/">Home</Link>  </li>
                            <li className="px-10 text-white"><Link to="/shop">Shop</Link> </li>
                            <li className="px-10 text-white"><Link to="/">Blog</Link> </li>
                        </ul>

                    </Container>
                </div>
            
        </div>
    )
}

export default Headers



const PopBox = ({ open, anchorEl, handlePopoverClose }) => {

    return (
        <Popover
            id="mouse-over-popover"
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
        >
            <p>This is Content</p>
        </Popover>
    )

}