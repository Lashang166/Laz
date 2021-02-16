import React, { useState } from 'react'
import { Header } from '../components/Header'
import Path from '../components/Path'
import Grid from '@material-ui/core/Grid'
import { Container, makeStyles, Typography, FormControl, Select, InputLabel, MenuItem    } from '@material-ui/core'
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);



const Shop = () => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false);

    const AccordionHandle = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
      };
     

    return (
        <div style={{backgroundColor: "#fff" }}>
            <Header />
            <Path />
            <div  style={{backgroundColror: "#fff" , width: "100%"}}>
                <Container style={{marginTop: "15px", backgroundColor: "#fff"}}>
                <Grid container >
                    <Grid item lg={3} xs={12} >
                        <div className={classes.filter}>
                            <Typography variant="h5" color="initial">
                                Filter
                            </Typography>
                            <div className="mt-3">
                                {
                                    filters.map((item, i) => (
                                        <Accordion  expanded={expanded === item.title} onChange={AccordionHandle(item.title)}>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                                            <Typography>{item.title}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                    <FilterBlog 
                                                        title={item.title} 
                                                        lists={item.lists} 
                                                        type={item.type}
                                                        shap={item.shap}
                                                        key={i}
                                                    />
                                            </AccordionDetails>
                                        </Accordion>
                                    ))
                                }
                            </div>
                        </div>
                    </Grid>

                    <Grid item lg={9} xs={12}> 

                        <div className={classes.sort}>
                            <InputLabel style={{marginLeft: "5px"}}>Sort By</InputLabel>
                            <Select  label="Sort By">
                                <MenuItem>1</MenuItem>
                                <option>2</option>
                                <option>3</option>
                            </Select>
                        </div>
                        {/* ------ product --------  */}
                        <Grid container spacing={2} className="pl-2">
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