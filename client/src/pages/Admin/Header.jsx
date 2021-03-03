import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
           <AppBar position="static" color="default">
             <Toolbar>
              <Link to="/">
                <ArrowBackIcon size="large" />
              </Link>
               <Typography variant="h6" className="pl-3">
                 Admin DashBoard
               </Typography>
             </Toolbar>
           </AppBar> 
        </div>
    )
}

export default Header
