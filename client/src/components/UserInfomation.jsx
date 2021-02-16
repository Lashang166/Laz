import React from 'react'

import { 
    AppBar , 
    Paper,
    Tabs , 
    Tab , 
    Typography, 
    Box,
    Link as StyleLink, 
    Accordion,
    AccordionSummary,
    AccordionDetails,
     } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      //width: 500,
    },
    link: {
        width: "225px",
        padding: "10px 20px",
        color: "#fff",
        textDecoration: "none",
        backgroundColor: theme.palette.ford.main,
        fontSize: "18px",
        marginTop: "10px",
        display: "block",
        textAlign: "center",
        "&:hover":{
            backgroundColor: theme.palette.ford.dark
        }
    },
    link2: {
        //width: "225px",
        padding: "5px 8px",
        color: "#fff",
        textDecoration: "none",
        backgroundColor: theme.palette.ford.main,
        fontSize: "18px",
        marginTop: "10px",
        "&:hover":{
            backgroundColor: theme.palette.ford.dark
        }
    },
  }));


const UserInfomation = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    >
                    <Tab label="เกี่ยวกับ" />
                    <Tab label="ที่อยู่" />
                    <Tab label="ตัวเลือกการชำระเงิน" />
                    </Tabs>
                </AppBar>
                
                <TabPanel value={value} index={0}>
                    <Person />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Address />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                
            </div>
        </div>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

function Person() {
    const classes = useStyles()
    return (
        <div style={{minHeight: "450px"}} className="flex flex-wrap bg-yellowe-300 ">
            <div className="w-2/4 bg-red-500e justify-around flex flex-col">
                <Typography className="mt-3" variant="h6">ชื่อ: Thomas Bruns</Typography>
                <Typography className="mt-3" variant="h6">วันเกิด: 0/0/0</Typography>
                <Typography className="mt-3" variant="h6">อีเมล: </Typography>
                <Typography className="mt-3" variant="h6">เพศ: </Typography>

            </div>
            <div className="w-2/4 bg-red-500e justify-around flex flex-col">
                <Typography className="mt-3" variant="h6">เบอร์โทรศัพท์: </Typography>
                <Typography className="mt-3" variant="h6">เลขประจำตัวผู้เสียภาษี: </Typography>
            </div>
            <div className="w-2/4 pt-3 mt-5">
                <Link to="/user/" className={classes.link}>แก้ไขข้อมูล</Link>
            </div>
        </div>
    )
}

function Address() {
    const classes = useStyles()
    return (
        <div className="flex flex-col">
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>ที่อยู่ 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>ที่อยู่ 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <div className="flex justify-end mt-10">
                <Link to="/user" className={classes.link}>เพิ่มที่อยู่</Link>

            </div>
        </div>
    )
}
  

export default UserInfomation
