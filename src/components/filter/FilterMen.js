import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { catArr, discArr, gendArr, priceArr, brandArr } from "./filter";
import FilterCards from "./FilterCards";

function FilterMen() {
  const [brandFilter, setbrandFilter] = useState("");
  const [genFilter, setgenFilter] = useState("");
  const [priceFilter, setpriceFilter] = useState(null);
  const [discFilter, setdiscFilter] = useState(0);
  const [catFilter, setcatFilter] = useState("");

  const handleBrand = (e) => {
    if (e.target.checked) {
      setbrandFilter(e.target.value);
    } else {
      setbrandFilter("");
    }
  };

  const handleGen = (e) => {
    if (e.target.checked) {
      setgenFilter(e.target.value);
    } else {
      setgenFilter("");
    }
  };

  const handlePrice = (e) => {
    if (e.target.checked) {
      setpriceFilter(e.target.value);
    } else {
      setpriceFilter(null);
    }
  };

  const handleDisc = (e) => {
    if (e.target.checked) {
      setdiscFilter(e.target.value);
    } else {
      setdiscFilter(null);
    }
  };

  const handleCat = (e) => {
    if (e.target.checked) {
      setcatFilter(e.target.value);
    } else {
      setcatFilter(null);
      console.log(catFilter);
    }
  };

  return (
    <>
      <p className=" flex justify-start text-2xl font-bold mb-[25px] pl-[15px] mt-[20px]">
        Myntra Fashion store
      </p>
      <div className="flex">
        <div className="text-left hidden md:block lg:w-1/4">
          <p className="text-sm font-bold mr-12 inline-block pl-5">FILTER</p>

          <p
            className="text-sm font-bold mr-12 text-pink-600 inline-block pl-5"
            onClick={() => {
              setbrandFilter("");
            }}
          >
            CLEAR ALL
          </p>

          <div className="filterBorder">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                className="mb-2"
              >
                {gendArr.map((val, ind) => {
                  return (
                    <FormControlLabel
                      key={ind}
                      onClick={handleGen}
                      style={{ marginLeft: "10px", marginBottom: "-10px" }}
                      value={val.value}
                      control={<Radio style={{ color: "#ff0066" }} />}
                      label={val.lable}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </div>

          <div className="filterBorder">
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginTop: "10px",
                paddingLeft: "15px",
              }}
            >
              CATEGORIES
            </p>
            <FormGroup className="mb-3">
              {catArr.map((val, ind) => {
                return (
                  <FormControlLabel
                    key={ind}
                    style={{ marginLeft: "10px", marginBottom: "-10px" }}
                    control={<Checkbox style={{ color: "#ff0066" }} />}
                    label={val}
                    value={val}
                    onClick={handleCat}
                  />
                );
              })}
            </FormGroup>
          </div>

          <div className="filterBorder">
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginTop: "10px",
                paddingLeft: "15px",
              }}
            >
              BRANDS
            </p>

            <FormGroup className="mb-3">
              {brandArr.map((val, ind) => {
                return (
                  <FormControlLabel
                    key={ind}
                    style={{ marginLeft: "10px", marginBottom: "-10px" }}
                    control={
                      <Checkbox style={{ color: "#ff0066" }} value={val} />
                    }
                    label={val}
                    value={val}
                    onClick={handleBrand}
                  />
                );
              })}
            </FormGroup>
          </div>

          <div className="filterBorder">
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginTop: "10px",
                paddingLeft: "15px",
              }}
            >
              PRICE
            </p>

            <FormGroup className="mb-3">
              {priceArr.map((val, ind) => {
                return (
                  <FormControlLabel
                    key={ind}
                    style={{ marginLeft: "10px", marginBottom: "0px" }}
                    control={
                      <Checkbox
                        style={{ justifyContent: "start", color: "#ff0066" }}
                        onClick={handlePrice}
                        value={val.price}
                      />
                    }
                    label={val.lable}
                  />
                );
              })}
            </FormGroup>
          </div>

          <div className="filterBorder">
            <p
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                marginTop: "10px",
                paddingLeft: "15px",
              }}
            >
              DISCOUNT
            </p>

            <FormGroup className="mb-4">
              {discArr.map((val, ind) => {
                return (
                  <FormControlLabel
                    key={ind}
                    style={{ marginLeft: "10px", marginBottom: "0px" }}
                    control={<Checkbox style={{ color: "#ff0066" }} />}
                    label={val.lable}
                    value={val.disc}
                    onClick={handleDisc}
                  />
                );
              })}
            </FormGroup>
          </div>
        </div>

        <div className="m-auto">
          <FilterCards
            brandFilter={brandFilter}
            genFilter={genFilter}
            priceFilte={priceFilter}
            discFilter={discFilter}
          />
        </div>
      </div>
    </>
  );
}

export default FilterMen;
