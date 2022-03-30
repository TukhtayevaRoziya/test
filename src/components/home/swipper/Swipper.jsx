import { Navigation, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./Swiper.module.css";

export const Swipper = () => {
  const data = [
    { id: 1, txt: "Испания" },
    { id: 2, txt: "Франция" },
    { id: 3, txt: "Сент Винсент и Гренадины" },
    { id: 4, txt: "Португалия" },
    { id: 5, txt: "Саудовская Аравия" },
    { id: 6, txt: "Португалия" },
  ];

  const dataMap = data.map((d) => (
    <SwiperSlide key={d.id}>
      <h1 className={styles.body__text}>{d.txt}</h1>
    </SwiperSlide>
  ));

  return (
    <div className={"body" + " " + styles.body}>
      <Swiper
        modules={[Navigation, Scrollbar]}
        slidesPerView={3}
        spaceBetween={10}
        navigation
      >
        {dataMap}
        {dataMap}
        {dataMap}
        ...
      </Swiper>
    </div>
  );
};
