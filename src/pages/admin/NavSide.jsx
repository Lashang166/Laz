
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
    Avatar, 
    Paper,
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Grid,
    Typography,
    Collapse} from '@material-ui/core'

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Route, Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EqualizerIcon from '@material-ui/icons/Equalizer';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import CreateIcon from '@material-ui/icons/Create';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#272a34",
        color: "#fff",
        width: "22%",
        minWidth: 250,
        minHeight: "100vh",
        height: "100%"

    }
}));

const menu = [
    {
        id: 0,
        label: "ราบงาน",
        icon: <EqualizerIcon />,
        path: "/user/dashboard/infomation"
    },
    {
        id: 1,
        label: "จัดการสินค้า",
        icon: <LocalMallIcon />,
        path: "/admin/productmanager"
    },
    {
        id: 2,
        label: "แจ้งเตือน",
        icon: <NotificationsNoneIcon />,
        path: "/user/dashboard/notification"
    },
    {
        id: 3,
        label: "รายการสั่งสินค้า",
        icon: <AirplanemodeActiveIcon />,
        path: "/user/dashboard/whichlist"
    }
]

const NavSide = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <Paper style={{background: "#272a34", color: "#fff"}} className="flex-col flex p-3 ">
                 <div className="p-2 flex justify-center flex-col items-center ">
                     <div className=" w-36 flex justify-center relative">
                        <Avatar 
                            style={{width: "115px", height: "115px"}} 
                            src="https://images.unsplash.com/photo-1602423597260-6e754437411a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                        />
                        <div  className="absolute -bottom-1 z-10 -right-1">
                            <input accept="image/*" className="hidden" id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera fontSize="large" />
                                </IconButton>
                            </label>
                        </div>
                     </div>
                     <div className="mt-2">
                        <Typography variant="h5">Thomas Bruns</Typography>
                        <p variant="subtitle2" className="text-white">Joined June 6, 2018</p>
                     </div>
                 </div>
                <div>
                    <List component="nav">
                        { menu.map((m, i) => (
                            <Link to={m.path} key={m.id}>
                                <ListItem button key={m.id}>
                                    <ListItemIcon style={{color: "#fff"}}>
                                        {m.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={m.label} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    
                </div>
             </Paper>
        </div>
    )
}

export default NavSide
