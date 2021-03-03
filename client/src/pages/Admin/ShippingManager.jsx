import { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { 
        Typography,
        Paper, 
        Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow,  TableHead,
        IconButton, 
        TextField,
        Button
    } from '@material-ui/core/'
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'
import Services from '../../actions/Services'



const ShippingManager = () => {
    const [rows, setRows] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [loading, setLoading] = useState(false)    
    const [shipper, setShipper] = useState("")

    useEffect(() => {
      Services.fetch('shipper')
      .then(data => {
          setLoading(false)
          console.log(data);
          setRows(data)
      })
      console.log("render");

      return () => {
         
      }

  },[loading])

  
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const submitHandle = (e) => {
    e.preventDefault()
    axios.post("/api/shipper/add", {name: shipper})
        .then(res => {
            console.log(res.data);
            setShipper("")
            setLoading(true)
        }).catch(err => {
            console.log(err)
        })
}

const onDelete = (id) => {
    axios.delete('/api/shipper/delete/' + id)
        .then(res => {
            console.log(res.data);
            setLoading(true)
        })
}


    return (
        <div className="flex flex-col">

        <Typography className="mt-6 text-center" fullWidth variant="h5" color="initial">การจัดส่ง</Typography>
        <div className="flex pt-7 w-full space-x-3" >
            
        <TableContainer component={Paper}>
                <Table className="" aria-label="custom pagination table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <div className="text-xl">การจัดส่ง</div>
                        </TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rows
                    ).map((row) => (
                    <TableRow key={row._id}>
                        <TableCell component="th" scope="row">
                        {row.name}
                        </TableCell>
                        <TableCell component="th" align="right">
                            <IconButton onClick={() => onDelete(row._id)}>
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    ))}
        
                    {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                    </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                        }}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                    />
                    </TableRow>
                </TableFooter>
                </Table>
             </TableContainer>

                {/* ========== add ========= */}
            <Paper  component="form"  onSubmit={submitHandle}  className=" px-5 py-4 w-2/5 h-52 flex flex-col items-center ">

            <Typography variant="h6" color="secondary">
                เพิ่ม
            </Typography>
            <TextField
                id="address"
                label="เพิ่ม"
                value={shipper}
                fullWidth
                onChange={(e) => setShipper(e.target.value)}
            />
            <Button color="primary" variant="contained" className="mt-5 w-full">เพิ่ม</Button>
            </Paper>
        </div>

    </div>
    )
}

export default ShippingManager



//table


  
function TablePaginationActions(props) {
    //const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onChangePage(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onChangePage(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onChangePage(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <div className="w-3/5">
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
function CustomPaginationActionsTable({ rows }) {
   // const classes = useStyles2();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    return (
      <TableContainer component={Paper}>
        <Table className="" aria-label="custom pagination table">
          <TableHead>
              <TableRow>
                  <TableCell>
                      <div className="text-xl">หมวดหมู่</div>
                  </TableCell>
                 
              </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" align="right">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
              </TableRow>
            ))}
  
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    );
  }

