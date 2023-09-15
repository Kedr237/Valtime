import React from 'react';
import axios from "axios";
import { BRAND_URL } from "./CONSTS";
import { setBrands } from "../store/slices/brandsSlice";
import { useAppDispatch } from '../store/hooks';

export default function GetBrands() {
  const dispatch = useAppDispatch();

  axios.get(BRAND_URL)
  .then(resp => dispatch(setBrands(resp.data)))
  .catch(error => console.log(error));

  return (
    <span className="get-brands" style={{display: 'none'}}></span>
  )
}