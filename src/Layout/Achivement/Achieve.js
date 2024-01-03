import React from "react";
import "./Achivement.css";

const jobs = [
  { id: 1, number: "25", title: "پروژه ها" },
  { id: 2, number: "250", title: "مشتری ها" },
  { id: 3, number: "105", title: "اعضا" },
  { id: 4, number: "126", title: "جوایز" },
];

const Achieve = () => {
  return (
    <div className="Countainer font-iransans">
      <div className="row h-full justify-evenly" style={{ margin: "0 15px" }}>
        <div className="col-sm-12 col-lg-2 self-center">
          <div className="styleRes">
            <div
              style={{
                position: "absolute",
                top: "0",
                width: "100%",
                height: "100%",
                opacity: "0.8",
                backgroundColor: "#f5cd00",
              }}
            ></div>

            {/* <h1
              style={{
                position: "absolute",
                top: "40%",
                right: "40%",
                fontSize: "60px",
                fontWeight: "bold",
                color: "#000",
                fontFamily:"iransans-num"
              }}
            >
              24
            </h1> */}
            <p
              style={{
                position: "absolute",
                top: "50%",
                right: "3rem",
                color: "#000",
                fontWeight: "bold",
                fontSize: "20px",
                width: "90%",
              }}
              className="styleModern"
            >
              مدرن ساخت
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-lg-5">
          <div className="StyleParag">
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "20px",
                color: "#000",
              }}
              className="font-iransans"
            >
              <span><img src={require("../../image/photo slider/icons8-question-64.png")}/></span>
             سیمان چیست
            </h1>
            <p style={{ color: "#7b7777", fontWeight: "bold" }}>
              سیمان یا سمنت واژه‌ایست که از لغت سمنتوم رومی گرفته شده و قدمت آن
              به پیش از میلاد می‌رسد. مصرف آن در ساختمان پانتئون شهر رم واقع در
              ایتالیا که مربوط به ۲۷ سال قبل از میلاد است، دیده شده‌است. در
              ساختمان گنبد این بنا که ۴۳ متر قطر دارد، مخلوطی از خرده‌سنگ و آهک
              پخته به کار رفته‌است. ولی کشف سیمان به شکل امروز مربوط است به یک
              نفر بنای انگلیسی بنام ژوزف اسپدین که از پختن آهک و خاک رس در حرارت
              بالا و آسیاب کردن آن موفق شد ابتدایی‌ترین نوع سیمان را کشف نموده و
              آن را در تاریخ ۲۱ اکتبر ۱۸۲۴ به نام خود در انگلستان ثبت نماید و
              نام محصول به دست آمده را سیمان پرتلند گذاشت.
            </p>
          </div>
          {/* <div className="row mt-12 font-iransans">
            {jobs.map((item, index) => (
              <div key={index} className="col-3">
                <div className="relative">
                  <h1
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      color: "#f5cd00",
                      fontFamily: "iransans-num",
                    }}
                  >
                    {item.number}
                  </h1>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Achieve;
