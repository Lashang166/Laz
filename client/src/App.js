import React, { useEffect } from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, ThemeProvider } from '@material-ui/core/'
import Routes from './routes';
import {BrowserRouter as Router } from 'react-router-dom'

import userActions from './store/actions/userActions'
import { useDispatch, useSelector} from 'react-redux'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f58b5e',
      main: '#f36e36',
      dark: '#aa4d25',
      contrastText: '#fff',
    },
    secondary: {
      light: '#3f428a',
      main: '#0f136d',
      dark: '#0a0d4c',
      contrastText: '#fff',
    },
    third: {
      light: '#ffc744',
      main: '#ffb916',
      dark: '#b2810f',
      contrastText: '#fff',
    },
    ford: {
      light: '#47afc5',
      main: '#1a9cb7',
      dark: '#126d80',
      contrastText: '#fff',
    },
    background: {
      default: "#eff0f5"
    }
  },
});



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userActions.authenticated())

  }, [])

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes />
        </div>
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
}

export default App;
