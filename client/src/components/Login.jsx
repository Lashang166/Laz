import React, { useEffect, useState } from 'react'
import {
        Typography,
        FormControl,
        InputAdornment,
        InputLabel,
        OutlinedInput,
        IconButton,
        Button,
    } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'


import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Btn from './Button';

import userActions from '../store/actions/userActions'

import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
      marginTop: theme.spacing(2)
    },
  }));
  


const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { loading, user , message } = useSelector((state) => state.userLogin);

    useEffect(() => {
      if(user !== null){

      }
    },[])

    const [values, setValues] = React.useState({
        username: '',
        password: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleSubmit = (e) => {
        e.preventDefault()
        console.log("a");
        dispatch(userActions.login(values.username, values.password))
        
        
      }

    return (
        <div className="bg-white p-3 m-24 flex">
            <form onSubmit={handleSubmit} className="flex flex-col w-3/5 borderr border-r-1 pb-3 border-r-2 border-fuchsia-600">
                <Typography className={classes.margin} variant="h5" color="initial">ยินดีต้อนรับ กรุณาเข้าสู่ระบบ</Typography>
                    <FormControl className={classes.margin} variant="outlined">
                        <InputLabel>Username</InputLabel>
                        <OutlinedInput
                            name="username"
                            value={values.username}
                            onChange={handleChange('username')}
                            type="text"
                            labelWidth={70}
                        />
                    </FormControl>
                    <FormControl className={classes.margin} variant="outlined">
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <Button type="submit"  className={classes.margin} variant="outlined" color="primary">เข้าสู่ระบบ</Button>
            </form>

            <div className="flex flex-col w-2/5 pt-14">
                <Link to="/user/register">
                    
                <Button  className={classes.margin} variant="outlined" color="primary">สมัครสมาชิก</Button>
                </Link>
                <Typography  className={classes.margin}  variant="subtitle1" color="initial">หรือเข้าสู่ระบบด้วย</Typography>
                <Button  className={classes.margin} variant="outlined" color="secondary">facebook</Button>
            </div>

            
        </div>
    )
}

export default Login
