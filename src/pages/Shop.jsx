import React from 'react'
import { Header } from '../components/Header'
import Path from '../components/Path'
import Grid from '@material-ui/core/Grid'
import { Container, makeStyles, Typography, FormControl, Select, InputLabel, MenuItem    } from '@material-ui/core'
import FilterBlog from '../components/FilterBlog'
import ProductCard from '../components/ProductCard'

const useStyles = makeStyles((theme) => ({
    filter: {
        paddingTop: "15px",
    },
    sort: {
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        padding: "15px 20px",
        height: "50px",
        borderBottom: "1px solid lightgray",
        marginBottom: "10px"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    sortControl: {
        height: "15px"
    }

}))

const filters = [
    {
        title: "หมวดหมู่",
        lists: ["เสื้อผ้า","ชุดชั้นใน"],
        type: "checkbox",
        shap: false
    },
    {
        title: "ไซส์",
        lists: ["XS", "S", "M", "L", "XL", "XXL"],
        type: "checkbox",
        shap: false
    },
    {
        title: "สี",
        lists: ["#f44336", "#f50057", "#9c27b0", "#2196f3", "#4caf50", "#ffeb3b"],
        type: "checkbox",
        shap:true
    },
]


const Shop = () => {

    const classes = useStyles()

    return (
        <div>
            <Header />
            <Path />
            <div  style={{backgroundColor: "#fff" , width: "100%"}}>
                <Container style={{marginTop: "15px", backgroundColor: "#fff"}}>
                <Grid container >
                    <Grid item lg={2} >
                        <div className={classes.filter}>
                            <Typography variant="h5" color="initial">
                                Filter
                            </Typography>

                            {
                                filters.map((item, i) => (
                                    <FilterBlog 
                                        title={item.title} 
                                        lists={item.lists} 
                                        type={item.type}
                                        shap={item.shap}
                                        key={i}
                                    />
                                ))
                            }
                        </div>
                    </Grid>

                    <Grid item lg={10} style={{ backgcround : "green"}}>

                        <div className={classes.sort}>
                            <InputLabel style={{marginLeft: "5px"}}>Sort By</InputLabel>
                            <Select  label="Sort By">
                                <MenuItem>1</MenuItem>
                                <option>2</option>
                                <option>3</option>
                            </Select>
                        </div>
                        {/* ------ product --------  */}
                        <Grid container spacing={2}>
                            <Grid item xs={6} lg={3}>
                                <ProductCard />
                            </Grid>
                            <Grid item xs={6} lg={3}>
                                <ProductCard />
                            </Grid>
                            <Grid item xs={6} lg={3}>
                                <ProductCard />
                            </Grid>
                            <Grid item xs={6} lg={3}>
                                <ProductCard />
                            </Grid>
                            <Grid item xs={6} lg={3}>
                                <ProductCard />
                            </Grid>
                         
                        </Grid>           
                    </Grid >
                </Grid>
                </Container>
            </div>

        </div>
    )
}


export default Shop