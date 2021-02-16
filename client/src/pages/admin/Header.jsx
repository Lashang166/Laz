import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => {
    return (
        <div>
           <AppBar position="static" color="default">
             <Toolbar>
               <Typography variant="h6" className="pl-3">
                 Admin DashBoard
               </Typography>
             </Toolbar>
           </AppBar> 
        </div>
    )
}

export default Header
