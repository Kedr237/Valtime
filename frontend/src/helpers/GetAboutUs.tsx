import React, { useEffect } from 'react';
import axios from "axios";
import { ABOUTUS_URL } from "./CONSTS";
import { useAppDispatch } from '../store/hooks';
import { setAboutUs } from '../store/slices/aboutUs';

export default function GetAboutUs() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get(ABOUTUS_URL)
    .then(resp => dispatch(setAboutUs(resp.data)))
    .catch(error => console.log(error));
  }, []);

  return (
    <span className="get-about-us" style={{display: 'none'}}></span>
  )
}