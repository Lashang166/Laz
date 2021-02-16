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
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import Alert from '@material-ui/lab/Alert';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useDispatch, useSelector} from 'react-redux'

import userActions from '../store/actions/userActions'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
      marginTop: theme.spacing(2)
    },
  }));

const Register = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { loading, userInfo, message } = useSelector((state) => state.userRegister);
    const [success, SetSucces] = useState(false)
    const [error, setError] = useState(false)
    const [values, setValues] = React.useState({
        username: '',
        password: '',
        repassword: '',
        email: '',
        showPassword: false,
      });

      useEffect(() => {
        if(userInfo !== null){
            SetSucces(true)
            setTimeout(() => {
                SetSucces(false)
                history.push("/user/login")
            },3000)
        }
      },[loading])


    
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
        if(values.password !== values.repassword){
            alert("รหัสผ่านไม่ตรงกัน")
        }else{
            dispatch(userActions.register(values.username, values.email, values.password))
        }
        
      }

    return (
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col bg-white p-3 m-24 pb-2">
            { success ? 
                <Alert severity="success"> {message} </Alert>
                : ""
            }
            <Typography className={classes.margin} variant="h5">สมัครสมาชิก</Typography>
                <FormControl className={classes.margin} variant="outlined">
                        <InputLabel>Username</InputLabel>
                        <OutlinedInput
                            name="username"
                            type="text"
                            value={values.username}
                            onChange={handleChange('username')}
                            labelWidth={70}
                        />
                </FormControl>
                <FormControl className={classes.margin} variant="outlined">
                        <InputLabel>E-mail</InputLabel>
                        <OutlinedInput
                            name="email"
                            value={values.email}
                            onChange={handleChange('email')}
                            type="text"
                            labelWidth={70}
                        />
                </FormControl>
                <FormControl className={classes.margin} variant="outlined">
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                        name="password"
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
                <FormControl className={classes.margin} variant="outlined">
                    <InputLabel>Confirm Password</InputLabel>
                    <OutlinedInput
                        name="re-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.repassword}
                        onChange={handleChange('repassword')}
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
                <Button  className={classes.margin} type="submit" variant="contained" color="primary">สมัครสมาชิก</Button>
        </div>
        </form>
    )
}

export default Register
