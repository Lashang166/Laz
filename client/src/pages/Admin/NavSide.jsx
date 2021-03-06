
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
    Avatar, 
    Paper,
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
    Typography,
    } from '@material-ui/core'

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Route, Link } from 'react-router-dom';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EqualizerIcon from '@material-ui/icons/Equalizer';

import LocalMallIcon from '@material-ui/icons/LocalMall';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CategoryIcon from '@material-ui/icons/Category';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#272a34",
        color: "#fff",
        //width: "22%",
        minWidth: 350,
        minHeight: "100vh",
        height: "100%"

    }
}));

const menu = [
    {
        id: 0,
        label: "รายงาน",
        icon: <EqualizerIcon />,
        path: "/admin/"
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
        path: "/admin/ordermanager"
    },
    {
        id: 4,
        label: "แบรนด์",
        icon: <BrandingWatermarkIcon />,
        path: "/admin/brandmanager"
    },
    {
        id: 5,
        label: "การจัดส่ง",
        icon: <LocalShippingIcon />,
        path: "/admin/shippingmanager"
    },
    {
        id: 6,
        label: "จัดการหมวดหมู่",
        icon: <CategoryIcon />,
        path: "/admin/categorymanager"
    },
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
