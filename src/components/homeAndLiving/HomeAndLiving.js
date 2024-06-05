import { Card, CardMedia } from "@mui/material";
import React from "react";

function HomeAndLiving() {
  return (
    <div className="">
      <img
        className="mt-4"
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/8/eff01060-f706-468d-b97c-95cdf43174f91528443826867-Desktop-Home-Banner.jpg"
        height={"350px"}
        alt="banner"
      />

      <h3 className="m-4 text-center">NICE TO SEE YOU HERE, COME ON IN!</h3>
      <div className="flex flex-col sm:flex-row">
        <Card className="m-4 inline-block">
          <CardMedia
            component="img"
            height="400"
            image="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563660020-bed.jpg"
            alt="green iguana"
          />
        </Card>

        <Card className="m-4 inline-block">
          <CardMedia
            component="img"
            height="400"
            image="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563782565-furnishings.jpg"
            alt="green iguana"
          />
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row">
        <Card className="m-4 inline-block">
          <CardMedia
            component="img"
            height="400"
            image="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563810789-art-n-decor.jpg"
            alt="green iguana"
          />
        </Card>

        <Card className="m-4 inline-block">
          <CardMedia
            component="img"
            height="400"
            image="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563866590-lamps.jpg"
            alt="green iguana"
          />
        </Card>
      </div>
      <img
        className="w-2/4 m-auto h-auto my-3"
        src="https://assets.myntassets.com/w_385,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478281102-Home-page-Desktop_12.jpg"
        alt=""
      />
      <div className="flex">
        <Card className="m-4 inline-block w-1/3">
          <CardMedia
            component="img"
            image="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517485441956-Wedding-checklist.jpg"
            alt=""
          />
        </Card>
        <Card className="m-4 inline-block w-1/3">
          <CardMedia
            component="img"
            image="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478592904-Home-page-Desktop_14.jpg"
            alt=""
          />
        </Card>

        <Card className="m-4 inline-block w-1/3">
          <CardMedia
            component="img"
            image="https://assets.myntassets.com/f_webp,w_326,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/1/11517478592892-Home-page-Desktop_15.jpg"
            alt=""
          />
        </Card>
      </div>
    </div>
  );
}

export default HomeAndLiving;
