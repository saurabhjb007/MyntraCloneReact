import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { fullArr } from "./filter";

function FilterCards({ brandFilter, priceFilter, discFilter }) {
  const arr = fullArr.filter((val, ind) => {
    if (!brandFilter) {
      return val;
    } else if (val.brand === brandFilter) {
      console.log(val.brand);
      return val;
    } else {
      return null;
    }
  });

  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-3 p-3 relative">
        {arr.map((val, ind) => {
          return (
            <Card sx={{ minWidth: 130 }} className="m-3" key={ind}>
              <CardActionArea className="m-auto w-[90%]">
                <CardMedia
                  component="img"
                  height="200"
                  image={val.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "left" }}
                  >
                    {val.brand}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-left p-[2px] flex flex-col"
                  >
                    <span className="text-secondary">{val.size}</span>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "15px",
                        marginRight: "2px",
                      }}
                    >{`Rs.${val.offerPrice}`}</span>
                    <strike className="text-secondary">{` Rs.${val.actualPrice}`}</strike>
                    <span
                      style={{ fontSize: "14px", color: "#FF6633" }}
                    >{`(${val.offerPer}%OFF)`}</span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default FilterCards;
