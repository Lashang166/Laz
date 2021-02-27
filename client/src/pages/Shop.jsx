import React from "react";

import Header from "../components/Headers";
import FilterBlog from "../components/FilterBlog";
import {
  Container,
  Typography,
  Grid,
  Chip,
} from "@material-ui/core";
import CardItem from "../components/CardItem";

const filters = [
  {
    title: "หมวดหมู่",
    lists: ["เสื้อผ้า", "ชุดชั้นใน"],
    type: "checkbox",
    shap: false,
  },
  {
    title: "ไซส์",
    lists: ["XS", "S", "M", "L", "XL", "XXL"],
    type: "checkbox",
    shap: false,
  },
  {
    title: "สี",
    lists: ["#f44336", "#f50057", "#9c27b0", "#2196f3", "#4caf50", "#ffeb3b"],
    type: "checkbox",
    shap: true,
  },
];

const Shop = () => {
  return (
    <div>
      <Header />
      <div className="w-full">
        <Container>
          <div className="w-full mt-4">
            <img 
                src="https://pomelofashion.imgix.net/img/c/2/bannerimage_60369b60c1973.jpg?auto=compress,format&fm=webp,jpg,png&w=1800&q=75" 
                alt="1" />
          </div>
          <Grid container className="relative pt-7">
            <Grid item  lg={2} classsName="absolute z-10 top-0 left-0 bg-white ">
              <Typography
                variant="body1"
                className="h-12 pt-2 text-xl mb-2"
                color="initial"
              >
                ค้นหาแบบละเอียด
              </Typography>
              {filters.map((item, i) => (
                <div key={i}>
                  <Typography variant="h6" color="initial">
                    {item.title}
                  </Typography>

                  <FilterBlog
                    title={item.title}
                    lists={item.lists}
                    type={item.type}
                    shap={item.shap}
                    key={i}
                  />
                </div>
              ))}
            </Grid>

            <Grid item lg={10} className="bg-gra">
              <div className=" h-12 bg-gray-200 flex pt-1   px-5">
                <Typography className="mt-2" variant="body1" color="initial">
                  เรียงโดย :
                </Typography>
                <Chip
                  label="เกี่ยวข้อง"
                  className="mx-3 mt-1"
                  clickable
                  color="primary"
                />
                <Chip
                  label="ล่าสุด"
                  className="mx-3 mt-1"
                  clickable
                  color="primary"
                />
              </div>
              {/* ---products---- */}
              <Grid container spacing={3} className="pt-3">
                <Grid item xs={12} md={3}>
                  <CardItem />
                </Grid>
                <Grid item xs={12} lg={3} >
                  <CardItem />
                </Grid>
                <Grid item xs={12}  lg={3} >
                  <CardItem />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Shop;
