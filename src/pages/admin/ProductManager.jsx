import React, { useState } from "react";

import TableStyle from "./Table";

import { 
    Button, 
    Modal, 
    Backdrop, 
    Fade, 
    Paper, 
    Typography,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    IconButton,
    Checkbox,
    FormControlLabel, 
    FormGroup} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  margin: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2)
  },
}));


function createData(name, Brand, Stock, Rating, Sales, Price) {
  return { name, Brand, Stock, Rating, Sales, Price };
}

const rows = [
  createData('Cupcake', "adidas", 10, 3.5, 0, 200),
  createData('Donut', "452", 25, 3.5, 0, 200),
  createData('Eclair', "Nike", 16, 3.5, 0, 200),
  createData('Frozen yoghurt', "Hoya", 3.5, 24, 0, 200),
  createData('Gingerbread', "univers", 3.5, 49, 0, 200),
  createData('Honeycomb', "adidas", 3, 3.5, 6.5, 200),
  createData('Ice cream sandwich', "uniqo", 9.0, 3.5, 0, 200),
  createData('Jelly Bean', "uniqo", 10, 3.5, 0, 200),
  createData('KitKat', "Nike", 26, 3.5, 0, 200),
  createData('Lollipop', "Hoya", 2, 3.5, 0, 200),
  createData('Marshmallow', "Nike", 0, 81, 0, 200),
  createData('Nougat', "adidas", 19, 3.5, 30, 200),
  createData('Oreo', "adidas", 18, 3.5, 0, 200),
]

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Product' },
  { id: 'Brand', numeric: false, disablePadding: true, label: 'Brand' },
  { id: 'Stock', numeric: false, disablePadding: true, label: 'in Stock' },
  { id: 'Rating', numeric: false, disablePadding: true, label: 'Rating' },
  { id: 'Sales', numeric: false, disablePadding: true, label: 'Sales' },
  { id: 'Price', numeric: false, disablePadding: true, label: 'Price' },

]


const ProductManager = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="m-5 p-5">
      <div className="flex justify-end">
        <Button
          onClick={handleOpen}
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
        >
          สร้าง
        </Button>
      </div>
      <div className="mt-3">
      <TableStyle topic="รายการสั่งสินค้า" headCells={headCells} rows={rows} order={false} />
      </div>

      {/* create */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paperr}>
            <CreateProduct />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

const size = ["XS", "S", "M", "L", "X", "XL", "XXL"]


const CreateProduct = () => {
  const classes = useStyles();

  return (
      <Paper style={{width: 950, padding: "25px 30px"}}>
        <Typography variant="h4" className="w-full">
          เพิ่มสินค้า
        </Typography> 
        <div className="flex">
          <div className="w-2/4 bg-red-50f0">
            <FormControl className={classes.margin} fullWidth variant="outlined">
                <InputLabel>ชื่อ</InputLabel>
                <OutlinedInput
                    type="text"
                    labelWidth={70}
                />
            </FormControl>
            <FormControl className={classes.margin} fullWidth variant="outlined">
                <InputLabel>ราคา</InputLabel>
                <OutlinedInput
                    type="text"
                    labelWidth={70}
                />
            </FormControl>
            <FormControl className={classes.margin} fullWidth variant="outlined">
                <InputLabel>แบรน</InputLabel>
                <OutlinedInput
                    type="text"
                    labelWidth={70}
                />
            </FormControl>
            <FormControl className={classes.margin} fullWidth variant="outlined">
                <InputLabel>จำนวน</InputLabel>
                <OutlinedInput
                    type="text"
                    labelWidth={70}
                />
            </FormControl>
          </div>

          <div className="w-2/4 bg-red-500f px-2 m-3">
            <div className="flex flex-col px-3">
              <Typography variant="h6" className="w-full">Size</Typography>
              <FormGroup row>
                { size.map((s, i) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          //checked={state.checkedB}
                          //onChange={handleChange}
                          
                          name="checkedB"
                          color="primary"
                        />
                      }
                      label={s}
                      key={i}
                    />
                ))}

              </FormGroup>
            </div>
          </div>
        </div>
      </Paper>
  )
}


export default ProductManager;
