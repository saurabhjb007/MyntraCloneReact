import React from "react";
import { imgKidsArr } from "../body/imgUrl";

function KidsBody() {
  return (
    <div className="">
      <img
        className="mt-4 w-5/6 m-auto h-auto"
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/7/bc993d6c-2cf7-4c5d-b20c-d8cddff8caee1638869622654-Cutecumber_Desk_Banner.jpg"
        alt="banner"
      />

      <img
        className="mt-4 m-4"
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg"
        height={"150px"}
        alt="banner"
      />

      <div className="p-2 flex">
        {imgKidsArr.map((val) => {
          console.log(val);
          return <img src={val.img} className="col-2" alt="shradda" />;
        })}
      </div>

      <img
        className="my-1 mx-3"
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/85891451-b148-4e95-b9f2-0bf42e82e51a1646993148063-Don_t-Miss-These-Offers.jpg"
        height={"100px"}
        alt="banner"
      />

      <div className="flex">
        <img
          className="mt-4 inline-block p-2 h-auto w-1/2 m-auto"
          src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/630c5d84-b4fa-4ba8-aa92-c91cd134b9201604906586823-39-Banner-LogoMania.jpg"
          alt="banner"
        />
        <img
          className="mt-4 inline-block p-2 h-auto w-1/2 m-auto"
          src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/7e5d76b3-afd1-4e82-8eee-179269cbab1c1604906586871-40-Banner-CharacterStore.jpg"
          alt="banner"
        />
      </div>
      <div className="flex">
        <img
          className="mt-4 inline-block p-2 h-auto w-1/2 m-auto"
          src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/cd843509-16fe-4437-a814-90f3eea6bb4b1604906586922-41-Banner-AllOrganic.jpg"
          alt="banner"
        />
        <img
          className="mt-4 inline-block p-2 h-auto w-1/2 m-auto"
          src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/d878e27a-f64d-45c9-bd9b-ee257b49894f1604906586980-42-Banner-EssentialStore.jpg"
          alt="banner"
        />
      </div>
      <div className="flex">
        <img
          className="mt-4 inline-block p-2 h-auto w-1/2 m-auto"
          src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/bb420f64-fea8-4d66-87b7-03c7f7fb6e621604906587041-43-Banner-Uniquely-Myntra.jpg"
          alt="banner"
        />
        <img
          className="mt-4 inline-block p-2 h-auto w-1/2 m-auto"
          src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/1ac6219d-54b8-484e-813b-c239bb9880141604906587091-44-Banner-ActiveWearStore.jpg"
          alt="banner"
        />
      </div>

      <img
        className="mt-4 m-4"
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg"
        height={"150px"}
        alt="banner"
      />

      <div className="p-2 flex">
        {imgKidsArr.map((val) => {
          console.log(val);
          return <img src={val.img} className="col-2" alt="shradda" />;
        })}
      </div>
    </div>
  );
}

export default KidsBody;
