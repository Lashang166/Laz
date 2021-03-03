import { useState, useEffect } from 'react'
import axios from 'axios'
import { 
    Button, 
    NativeSelect , 
    FormControlLabel, 
    Paper, 
    Typography,
    FormControl,
    TextField,
    Checkbox,
    InputLabel,  
     } from "@material-ui/core/";
import Services from '../../actions/Services'
import { useDispatch, useSelector } from 'react-redux'
import ProductActions from '../../actions/productActions'

const size = ["XS", "S", "M", "L", "XL", "XXL"]

const AddProduct = () => {
    const dispatch = useDispatch()
    const { products, loading, message } = useSelector(state => state.productsState)
    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState([])
    const [selectBrand, setSelectBrand] = useState("")
    const [category, setCategoty] = useState([])
    const [selectCate, setSelectCate] = useState("")
    let [color, setColor] = useState("")



    useEffect(() => {
        Services.fetch("brand")
            .then(data => {
                setBrand(data)
            })
        Services.fetch("category")
            .then(data => {
                setCategoty(data)
            })

        return () => {
           // source.cancel();
        }
    },[])

    const addHandler = (e) => {
        e.preventDefault()
        const colorsList = color.split(',')
        console.log(colorsList);
        const data = new FormData(e.target)
        data.append("colors", colorsList)
        dispatch(ProductActions.add(data))
        
    }


    return (
        <div>
            <Paper component="form" onSubmit={addHandler} className="px-10 py-2 mt-10 lg:w-2/4 mx-auto">
                <Typography variant="h4" className="text-center mt-1" color="initial">เพิ่มสินค้า</Typography>
                <div className="flex flex-col items-center mt-5">
                    <FormControl className="w-full  mt-3" fullWidth variant="outlined">
                        <TextField name="title" id="title"  id="standard-basic" label="ชื่อ" />
                    </FormControl>
                    <FormControl className="w-full  mt-3" fullWidth variant="outlined">
                        <TextField id="standard-basic" name="price" id="price"  label="ราคา" />
                    </FormControl>
                    <div className="flex items-center w-full mt-3">
                        <Typography variant="body2" className="mr-5 text-xl text-gray-500 bdg-red-600">
                            รูปภาพ : 
                        </Typography>
                            <input 
                                accept="image/*"
                                name="photos" 
                                id="file"
                                className="hiddend"
                                //id="contained-button-file"
                                multiple
                                type="file" />
                    
                    </div>
                    <div className="flex items-center w-full mt-3 justify-between ">
                        <Typography variant="body2" className="mr-5 text-xl text-gray-500 bdg-red-600">
                            ไซต์ :
                        </Typography>
                            { size.map((s, i) => (
                                <FormControlLabel
                                    component="input"
                                    name="variation"
                                    value={s}
                                    control={
                                        <Checkbox color="primary" />
                                    }
                                    label={s}
                                    key={i}
                                />

                            ))}
                    </div>
                    <div className="flex w-full">

                    
                        <FormControl className="mt-3 w-2/4">
                            <InputLabel htmlFor="demo-customized-select-native">Brand</InputLabel>
                            <NativeSelect
                           // component="select"
                            name="brand"
                            //id="demo-customized-select-native"
                            value={selectBrand}
                             onChange={(e) => { setSelectBrand(e.target.value)} }
                            >
                            <option aria-label="None" value="" />
                            { brand.map((b, i) => (
                                <option key={b._id} value={b._id}>{b.name}</option>
                            ))}
                            </NativeSelect>
                        </FormControl>
                        <div className="mx-1"></div>
                        <FormControl className="mt-3 w-2/4">
                            <InputLabel htmlFor="demo-customized-select-native">Category</InputLabel>
                            <NativeSelect
                            //component="select"
                            name="category"
                            //id="demo-customized-select-native"
                            value={selectCate}
                             onChange={(e) => { setSelectCate(e.target.value)} }
                            >
                            <option aria-label="None" value="" />
                            { category.map((c, i) => (
                                <option key={c._id} value={c._id}>{c.category}</option>
                            ))}
                            </NativeSelect>
                        </FormControl>
                    </div>
                    <FormControl className="w-full  mt-3" fullWidth variant="outlined">
                        <TextField id="standard-basic" id="countInStock"  name="countInStock" label="จำนวนในสต๊อก" />
                    </FormControl>
                    <FormControl className="w-full  mt-3" fullWidth variant="outlined">
                        <TextField 
                            id="standard-basic" 
                            value={color}
                            onChange={e => setColor(e.target.value)} 
                            label="สี เช่น แดง,เหบือง,ฟ้า " />

                    </FormControl>
                                
                    <FormControl className="w-full  mt-3" fullWidth variant="outlined">
                        <TextField id="standard-basic"rows={4} name="description" id="description"  multiline label="รายละเอียด " />
                    </FormControl>

                    <Button variant="contained" type="submit" color="primary" fullWidth className="mt-3 mb-3">เพิ่ม</Button>
                  
                </div>
            </Paper>
        </div>
    )
}

export default AddProduct
