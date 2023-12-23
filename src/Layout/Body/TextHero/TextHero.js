import React from "react";

const TextHero = () => {
  return (
    <div className="w-1/2">
      <p className="text-justify ">
        اگر می‌خواهید خواننده متن فارسی‌تان را کنار نگذارد و آن را تا انتها
        بخواهند، از ویرایش و بازخوانی متن غافل نشوید. سرویس ویرایش و بازخوانی
        متون فارسی شبکه مترجمین ایران این‌جا است تا متون فارسی‌تان را خوانش‌پذیر
        کند.اگر می‌خواهید خواننده{" "}
        <span>
          <b>متن فارسی‌تان را کنار نگذارد</b>
        </span>{" "}
        و آن را تا انتها بخواهند، از ویرایش و بازخوانی متن غافل نشوید. سرویس
        ویرایش و بازخوانی متون فارسی شبکه مترجمین ایران این‌جا است تا متون
        فارسی‌تان را خوانش‌پذیر کند.
      </p>
      <section>
        <div className="flex flex-row items-center">
          <span className="border-bottom w-full border-zinc-900 "></span>

          <a >
            <img className="w-80" src={require("../../../image/1.png")} />
          </a>

          <span className="border-bottom w-full border-zinc-900 "></span>
        </div>
        <div className="flex flex-col items-center">
            <h4 className="my-3">متن آزمایشی</h4>
            <p>یرایش و بازخوانی متون</p>
            <button className="bg-slate-900 text-white  inline py-2 rounded-full w-48 my-3">کلیک کنید</button>
        </div>
      </section>
    </div>
  );
};

export default TextHero;
