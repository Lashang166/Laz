import { useState, useRef } from 'react'

import { 
    Container, 
    Grid, 
    makeStyles, 
    InputBase, 
    IconButton,
    Badge,
     Typography,

     Grow,
     Paper,
     Popper,
     MenuItem,
     MenuList, 
     List,
     ListItem,
     ListItemIcon,
     ListItemText
    } from "@material-ui/core";

import { Link } from 'react-router-dom'

import Popover from '@material-ui/core/Popover';
import { useSelector, useDispatch } from 'react-redux'

import SearchIcon from '@material-ui/icons/Search';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Collapse from '@material-ui/core/Collapse';

import userActions from '../actions/userActions'

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
    const dispatch = useDispatch()
    const [menu, setMenu] = useState(false)
    const { user, isAuthenticated } = useSelector(state => state.userState)
    const { counterItems } = useSelector(state => state.cartState)



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
                                <Badge color="error" badgeContent={counterItems > 0 ? counterItems: null}>
                                    <ShoppingCartOutlinedIcon color="secondary"  style={{fontSize: "28px"}}/>
                                </Badge>
                            </Link>

                          

                        </IconButton>
                        {isAuthenticated ? 
                            <IconButton>
                                <Badge color="error" badgeContent={4}>
                                    <NotificationsOutlinedIcon color="secondary" style={{fontSize: "28px"}}/>
                                </Badge>
                            </IconButton>
                             : null
                        } 
                        <div  className="relative text-black" onMouseOver={() => setMenu(true)} onMouseLeave={() => setMenu(false)}>
                        <IconButton >
                            <Link to={`/buyer/login`}>
                                <Badge color="secondary">
                                    <AccountCircleOutlinedIcon color="secondary"  style={{fontSize: "28px"}}/>
                                </Badge>
                            </Link>
                        </IconButton> 
                          { isAuthenticated ? 
                            <div className={`${menu ? "absolute" : "hidden"}  w-48  bg-white py-1 right-0 -bottoกm-20 z-10`}>
                                <Collapse in={menu}>
                                <List>
                                    <ListItem button>
                                        <Link to="/user/dashboard"  className="flex items-center ">
                                            <ListItemIcon>
                                                <AccountCircleOutlinedIcon color="secondary"  style={{fontSize: "28px"}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="บัญชี" />
                                        </Link>
                                    </ListItem>
                                    
                            { user.role === "admin" ? 
                                    <ListItem button>
                                        <Link to="/admin/report" className="flex items-center ">
                                            <ListItemIcon>
                                                <DashboardIcon color="secondary"  style={{fontSize: "28px"}}/>
                                            </ListItemIcon>
                                            <ListItemText primary="จัดการ" />
                                        </Link>
                                    </ListItem>
                            : null}
                               
                                    <ListItem button onClick={() => { dispatch(userActions.logout())}}>
                                        <ListItemIcon>
                                            <ExitToAppIcon color="secondary"  style={{fontSize: "28px"}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="ออก" />
                                    </ListItem>
                                </List>
                            </Collapse>
                            </div>   
                            : null }
                        </div>
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



