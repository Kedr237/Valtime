import React, { useEffect } from 'react';
import axios from 'axios';
import { WATCH_URL } from './CONSTS';
import { useAppDispatch } from '../store/hooks';
import { setWatches } from '../store/slices/watchesSlice';


export default function GetWatches() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get(WATCH_URL)
    .then(resp => dispatch(setWatches(resp.data)))
    .catch(error => console.log(error));
  }, []);


  return (
  <span className="get-watches" style={{display: 'none'}}></span>
  );
}