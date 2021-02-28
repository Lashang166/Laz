import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Headers";
import {
  TextField,
  Paper,
  Container,
  FormControl,
  NativeSelect,
  InputLabel,
} from "@material-ui/core/";
import CartActions from '../actions/cartActions'
import Typography from "@material-ui/core/Typography";
import Services from "../actions/Services";

const Checkout = () => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState();
  const [payment, setPayment] = useState([]);
  const [selectPayment, setSelectPayment] = useState("");
  const [selectExpress, setSelectExpress] = useState("");
  const [express, setExpress] = useState([]);

  const { cartItems, priceCounter } = useSelector((state) => state.cartState);

  useEffect(() => {
    Services.fetch("payment").then((data) => {
      console.log(data);
      setPayment(data);
    });
    Services.fetch("shipper").then((data) => {
      console.log(data);

      setExpress(data);
    });

    return () => {
      // source.cancel();
    };
  }, []);


  const CheckoutHandle = () => {
    console.log(selectPayment, selectExpress);
    dispatch(CartActions.checkout(cartItems, address, selectPayment, selectExpress, priceCounter))
}


  return (
    <div>
      <Header />
      <Container>
        <Paper className="mt-3 px-5 py-4 w-2/4 flex flex-col items-center ">
          <Typography variant="h6" color="secondary">
            Check out
          </Typography>
          <TextField
            id="address"
            label="Address"
            value={address}
            multiline
            rows={4}
            fullWidth
            onChange={(e) => setAddress(e.target.value)}
          />
          <FormControl className="mt-3 w-full">
            <InputLabel htmlFor="demo-customized-select-native">
              Payment
            </InputLabel>
            <NativeSelect
              // component="select"
              name="payment"
              //id="demo-customized-select-native"
              value={selectPayment}
              onChange={(e) => {
                setSelectPayment(e.target.value);
              }}
            >
              <option aria-label="None" value="" />
              {payment.map((b, i) => (
                <option key={b._id} value={b._id}>
                  {b.name}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          <FormControl className="mt-3 w-full">
            <InputLabel htmlFor="demo-customized-select-native">
              Shipepr
            </InputLabel>
            <NativeSelect
              // component="select"
              name="shipper"
              //id="demo-customized-select-native"
              value={selectExpress}
              onChange={(e) => {
                setSelectExpress(e.target.value);
              }}
            >
              <option aria-label="None" value="" />
              {express.map((b, i) => (
                <option key={b._id} value={b._id}>
                  {b.name}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          <button
            style={{ background: "#ee4d2d" }}
            className=" w-full  h-9 mt-3 flex items-center justify-center rounded-md  text-white text-xl"
            type="submit"
            onClick={() => CheckoutHandle()}
          >
            สั่งซื่อ
          </button>
        </Paper>
      </Container>
    </div>
  );
};

export default Checkout;
