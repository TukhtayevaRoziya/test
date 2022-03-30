import React from "react";

import vector from '../../../assets/vector.svg'

import styles from "./Input.module.css";

export const Input = ({placeholder='no placeholder'}) => {
  return (
    <div className={'body'}>
      <div className={styles.body__inp}>
        <input placeholder={placeholder} autoFocus type="text" name="" id="" />
        <img src={vector} alt="" />
      </div>
    </div>
  );
};
