import React from "react";
import "./ImageHero.css";
const ImageHero = () => {
  return (
    <div>
      <div className="container StyleBg">
        <div className="col-lg-6 styleText font-iransans">
            <h1 className="text-slate-50 font-bold text-3xl mb-3">فروشگاه آنلاین مصالح ساختمانی</h1>
            <p className="text-white mb-3">همین حالا آگهی خود را ثبت کنید</p>
            <button className="bg-yellow-400 py-2 px-4 rounded-lg">کلیک کنید</button>
        </div>
      </div>
    </div>
  );
};

export default ImageHero;
