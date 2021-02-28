import React from 'react'
import { 
        Avatar, 
        Paper,
        List, 
        ListItem, 
        ListItemIcon, 
        ListItemText, 
        Grid,
        Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import InboxIcon from '@material-ui/icons/Inbox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { Route, Link } from 'react-router-dom';
// import UserInfomation from '../components/UserInfomation'

const useStyles = makeStyles((theme) => ({
    
  }));

const menu = [
    {
        id: 1,
        label: "ข้อมูลส่วนตัว",
        icon: <AccountCircleIcon />,
        path: "/user/dashboard/infomation"
    },
    {
        id: 2,
        label: "แจ้งเตือน",
        icon: <NotificationsNoneIcon />,
        path: "/user/dashboard/notification"
    },
    {
        id: 3,
        label: "สินค้าที่อยากได้",
        icon: <FavoriteBorderIcon />,
        path: "/user/dashboard/whichlist"
    }
]

const Dashboard = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid item lg={3}>
             <Paper className="flex-col flex p-3 ">
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
                        <p variant="subtitle2" className="text-gray-500">Joined June 6, 2018</p>
                     </div>
                 </div>
                <div>
                    <List component="nav">
                        { menu.map((m) => (
                            <Link to={m.path}>
                                <ListItem button key={m.id}>
                                    <ListItemIcon>
                                        {m.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={m.label} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </div>
             </Paper>
            </Grid>
            <Grid item lg={9}>
                <Paper className="p-3 min-h-screen">
                  {/* <Route path="/user/dashboard/infomation" component={UserInfomation} /> */}
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Dashboard
