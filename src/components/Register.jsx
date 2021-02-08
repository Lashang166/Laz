import React from 'react'
import {
    Typography,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    IconButton,
    Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
      marginTop: theme.spacing(2)
    },
  }));

const Register = () => {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        username: '',
        password: '',
        repassword: '',
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
    return (
        <div className="flex flex-col bg-white p-3 m-24 pb-2">
            <Typography className={classes.margin} variant="h5">สมัครสมาชิก</Typography>
                <FormControl className={classes.margin} variant="outlined">
                        <InputLabel>Username</InputLabel>
                        <OutlinedInput
                            type="text"
                            labelWidth={70}
                        />
                </FormControl>
                <FormControl className={classes.margin} variant="outlined">
                        <InputLabel>E-mail</InputLabel>
                        <OutlinedInput
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
                <FormControl className={classes.margin} variant="outlined">
                    <InputLabel>Confirm Password</InputLabel>
                    <OutlinedInput
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
                <Button  className={classes.margin} variant="contained" color="primary">สมัครสมาชิก</Button>
        </div>
    )
}

export default Register
