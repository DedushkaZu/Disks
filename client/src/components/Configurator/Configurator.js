import './Configurator.css';
import React360 from '../React360/React360'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Configurator() {
  const [car, setCar] = useState('images/v-g-d1-g')
  const [chooseCar, setChooseCar] = useState(false);
  

  function handlerDisks1() {
    setCar('images/v-g-d1-g')
  }

  function handlerDisks2() {
    setCar('images/v-g-d2-g')
  }
  function handlerDisks3() {
    setCar('images/v-g-d3-g')
  }
  function handlerColor1() {
    setCar('images/T-v-g-d1-o')
  }
  function handlerColor2() {
    setCar('images/T-v-g-d2-o')
  }

  const handlerChoose = () => {
    setChooseCar(!chooseCar)
  }
  return (
        chooseCar ? (
          <div className="configurator-wrapper">
            <React360  dir={car} numImages={20}/>

          <div className="options-container">

            <div className="colors">
              <div className="big-block">
                <h1>Color:</h1>
                <div className="color-red sm-blocks-c"></div>
                <div className="color-white sm-blocks-c"></div>
                <div className="color-black sm-blocks-c"></div>
                <div onClick={handlerColor1} className="color-green sm-blocks-c"></div>
                <div onClick={handlerColor2} className="color-orange sm-blocks-c"></div>
              </div>
            </div>
            <div className="disks">
              <div className="big-block">
                <h1>Disks:</h1>
                <div onClick={handlerDisks1} className="disk sm-blocks-d" >Disk1</div>
                <div onClick={handlerDisks2} className="disk sm-blocks-d" >Disk2</div>
                <div onClick={handlerDisks3} className="disk sm-blocks-d" >Disk3</div>
                {/* <div onClick={handlerDisks4} className="disk sm-blocks-d" >Disk4</div>
                <div onClick={handlerDisks5} className="disk sm-blocks-d" >Disk1</div> */}
              </div>
            </div>
          </div>
          <div className="choose-car-button">
            <button onClick={handlerChoose}>Choose anorther car</button>
          </div>
        </div> 
        ) : 
        (
        <div>
          <select className="car-brand">
            <option value="default"></option>
            <option value="m">Mercedes</option>
          </select>
          <select className="car-brand-models">
            <option value="default"></option>
            <option value="s">S-class</option>
          </select>
          <button onClick={handlerChoose}>Choose</button>
        </div>
        )
  )
}

export default Configurator
