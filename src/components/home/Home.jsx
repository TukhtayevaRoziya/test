import React from "react";
import { Route, Routes } from "react-router-dom";

import { Swipper } from "./swipper/Swipper";
import { Chips } from "./chips/Chips";
import { Input } from "./input/Input";
import { Button } from "./button/Button";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.body}>
      <div className={styles.body__block}>
        <div className={styles.body__main_block}>
          <div className={styles.body__main_block__block}>
            <h1>Сент_Винсент и Гренадины</h1>
          </div>
        </div>
        <Swipper />
        <hr className={styles.body__hr} />
        <h1 className={styles.body__text}>
          Мир Breezzor огромный, исследуй его!
        </h1>
        <Chips />
        <Routes>
          <Route
            index
            element={
              <Input placeholder="Поиск по стране, региону, городу, название пляжа" />
            }
          />
          <Route
            path="/breezzor"
            element={
              <Input placeholder="Поиск по стране, региону, городу, названию отеля" />
            }
          />
          <Route
            path="/impression"
            element={
              <Input placeholder="Поиск по стране, региону, городу, названию впечатления" />
            }
          />
          <Route
            path="/route"
            element={
              <Input placeholder="Поиск по стране, региону, городу, названию маршрута" />
            }
          />
        </Routes>
        <Button />
      </div>
    </div>
  );
};
