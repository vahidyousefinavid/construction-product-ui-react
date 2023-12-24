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
    <div className="Countainer font-iransans" style={{ marginBottom: "80px" }}>
      <div className="row h-full justify-center">
        <div className="col-sm-12 col-lg-2 self-end">
          <div className="relative">
            <img
              style={{ width: "140px", height: "10rem" }}
              className="styleImg"
              src={require("../../image/constroc.png")}
            />
            <h1
              className="absolute  top-3/4 right-2/3"
              style={{ fontSize: "40px", fontWeight: "bold", color: "#fff" }}
            >
              24
            </h1>
          </div>
        </div>
        <div className="col-sm-12 col-lg-5">
          <div>
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              دستاورد های ما
            </h1>
            <p style={{ color: "#7b7777", fontWeight: "bold" }}>
              کلید ارتباط موثر با جهان سخن گفتن به زبان جهانیان است. خدمات ترجمه
              تخصصی ما که در کلاس جهانی ارائه می‌شود به شما کمک می‌کند بازارهای
              جدیدی بیابید و خود را به خوبی به شرکای بین المللی معرفی کنید.
              همچنین، طیف گسترده مترجم‌های ما، شما را قادر می‌سازد تخصصی‌ترین
              متون آکادمیک را بر اساس استانداردهای پذیرش معتبرترین ژورنال‌ها
              ترجمه کنید.
            </p>
          </div>
          <div className="row mt-12 font-iransans">
            {jobs.map((item,index) => (
              <div key={index} className="col-3">
                <div className="relative">
                <h1 style={{fontSize:"40px",fontWeight:"bold",color:"#f5cd00"}}>{item.number}</h1>
                <span style={{fontSize:"12px",fontWeight:"bold"}}>{item.title}</span>
                </div>
              
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achieve;
