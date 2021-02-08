import { 
        Breadcrumbs, 
        Container, 
        makeStyles,
        Typography } from '@material-ui/core';


import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { MemoryRouter, Link, Route,  } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        //backgroundColor: "#fff",
        Height: "40px",
        marginTop: theme.spacing(1.5),
        padding: "10px 20px",
        justifyItems: "center"
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
    link: {
        display: "flex",
        justifyItems: "center",
        textDecoration: "none",
        color: theme.palette.secondary.light
    }
}))


const Path = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Container>
            <Breadcrumbs>
                <Link color="inherit" to="/" className={classes.link}>
                    <HomeIcon className={classes.icon} />
                    Home
                </Link>
                <Link color="inherit" to="/shop" className={classes.link}>
                    <ShoppingCartIcon className={classes.icon} />
                    Shop
                </Link>
            </Breadcrumbs>
        </Container>
        </div>

    )
}

export default Path





{/* <MemoryRouter initialEntries={["/"]} initialIndex={0}>
            <Route>
              {( { location } ) => {
                  const pathnames = location.pathname.split('/').filter((x) => x);
                    return (
                        <Breadcrumbs>
                            <Link color="inherit" to="/">
                                Home
                            </Link>
                            { pathnames.map((value, index) => {
                                const last = index === pathnames.length - 1;
                                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                                console.log(last);
                                console.log(value);
                                console.log(to);
                                return last ? (
                                    <Typography color="textPrimary" >
                                      
                                    </Typography>
                                  ) : (
                                    <Link color="inherit" >
                                      
                                    </Link>
                                  );
                            }) }
                        </Breadcrumbs>
                    )
              }}
            </Route>
</MemoryRouter> */}