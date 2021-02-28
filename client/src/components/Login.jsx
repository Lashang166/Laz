import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Typography,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    IconButton,
    Button,
    Paper
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Link, useHistory } from 'react-router-dom'
import UserActions from '../actions/userActions'

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [values, setValues] = useState({
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
        dispatch(UserActions.login(values.username, values.password))
        history.push("/shop")
      }

    return (
        <div className="flex  justify-center h-screen">
            <Paper component="form" onSubmit={handleSubmit} method="post" className="w-3/4 lg:w-1/4 mt-20 md:h-3/4 flex  items-center flex-col py-7">
                <Typography  variant="h5" color="initial">ยินดีต้อนรับ กรุณาเข้าสู่ระบบ</Typography>
                    <FormControl  variant="outlined" className="w-3/4 mt-3"> 
                        <InputLabel>Username</InputLabel>
                        <OutlinedInput
                            name="username"
                            value={values.username}
                            onChange={handleChange('username')}
                            type="text"
                            
                            labelWidth={80}
                        />
                    </FormControl>
                    <FormControl variant="outlined" className="w-3/4 mt-3">
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
                    <Button type="submit"  className="mt-3 w-3/4"  variant="outlined" color="primary">เข้าสู่ระบบ</Button>
                    <div className="mt-4">
                        <hr/>
                        <a href="/api/auth/google" className="w-3/4 px-2 py-1 rounded-sm  text-red-600 text-white text-xl ">Login with Google +</a>
                    </div>
                    <Link to="/buyer/register">Register</Link>
            </Paper>
        </div>
    )
}

export default Login


export function Register  ()  {
    const dispatch = useDispatch()
    const history = useHistory()
    const [values, setValues] = React.useState({
        username: '',
        password: '',
        repassword: '',
        email: '',
        showPassword: false,
      });
    const { loading, message, isAuthenticated } = useSelector(state => state.userState)


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
            console.log(values.username,values.email, values.password);
            dispatch(UserActions.register(values.username, values.email, values.password))
            history.push("/buyer/login")
        }
        
      }

    return (
        <div className="flex  justify-center h-screen">
            <Paper component="form" onSubmit={() => handleSubmit} className="w-3/4 lg:w-1/4 mt-20 md:h-3/4 flex  items-center flex-col py-7">
                <Typography  variant="h5" color="initial">สมัครสมาชิก</Typography>
                    <FormControl  variant="outlined" className="w-3/4 mt-3"> 
                        <InputLabel>Username</InputLabel>
                        <OutlinedInput
                            name="username"
                            value={values.username}
                            onChange={handleChange('username')}
                            type="text"
                            
                            labelWidth={80}
                        />
                    </FormControl>
                    <FormControl  variant="outlined" className="w-3/4 mt-3"> 
                        <InputLabel>E-mail</InputLabel>
                        <OutlinedInput
                            name="email"
                            value={values.email}
                            onChange={handleChange('email')}
                            type="text"
                            
                            labelWidth={80}
                        />
                    </FormControl>
                    <FormControl variant="outlined" className="w-3/4 mt-3">
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
                    <FormControl className="w-3/4 mt-3" variant="outlined">
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
                    <Button type="submit"  className="mt-3 w-3/4"  variant="outlined" color="primary">สมัครสมาชิก</Button>
                    <div className="mt-4">
                        <hr/>
                        <a href="/api/auth/google" className="w-3/4 px-2 py-1 rounded-sm  text-red-600  text-xl ">Login with Google +</a>
                    </div>
                    <Link to="/buyer/login">Login</Link>
            </Paper>
        </div>
    )
}


 