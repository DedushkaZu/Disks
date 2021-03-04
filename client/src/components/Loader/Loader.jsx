import React from 'react'
import { useSelector } from 'react-redux'
import Wheel from '../Wheel/Wheel'


function Loader() {

  const loading = useSelector(state => state.loader)

  return (
    loading && <Wheel />
  );
}

export default Loader
