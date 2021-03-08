import './Configurator.css';
import React360 from '../React360/React360'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router-dom';
// import { getAllCars } from '../../redux/actionCreators/cars';
import { saveConfig } from '../../redux/actionCreators/user';

function Configurator() {
  const cars = useSelector(state => state.cars);
  const [tapacStyle, setTapacStyle] = useState(false)
  const [chooseCar, setChooseCar] = useState(true);
  const [brand, setBrand] = useState('v')
  const [model, setModel] = useState('g')
  const [disk, setdisk] = useState('d1')
  const [color, setColor] = useState('g')
  const photoCount = cars[brand][model].photoCount
  const colors = cars[brand][model].color;
  const dispatch = useDispatch();

  function handlerDisks1() {
    setdisk('d1')
  }

  function handlerDisks2() {
    setdisk('d2')
  }
  function handlerDisks3() {
    setdisk('d3')
  }
  // function handlerColor1() {
  //   setCar('images/T-v-g-d1-o')
  // }
  // function handlerColor2() {
  //   setCar('images/T-v-g-d2-o')
  // }

  const handlerTapacStyle = () => {
    setTapacStyle(!tapacStyle)
  }

  const handlerChoose = (e) => {
    if (brand && model) {
      setChooseCar(!chooseCar)
    }
  }

  function handerChooseCar(e) {
    const choosenBrand = e.target.value
    console.log(choosenBrand)
    setBrand(`cars/${choosenBrand}/g/d1/g`)
  }

  function handlerChooseModel(e) {
    const choosenModel = e.target.value
    console.log(choosenModel)
    setModel(`cars/${choosenModel}/g/d1/g`)
  }

  function handlerColor(value) {
    setColor(value);
  }

  const handlerSaveConfig = () => {
    dispatch(saveConfig({
      path: `cars/${brand}/${model}/${disk}/${color}/`,
      numImages: photoCount,
    }));
  };

  return (
    chooseCar ? (
      <div className="configurator-wrapper">
        {
          tapacStyle ?
            <React360 dir={`cars/T/v/g/d1/o/`} numImages={23} /> :
            <React360 dir={`cars/${brand}/${model}/${disk}/${color}/`} numImages={photoCount} />
        }

        <div className="options-container">
          <div><button onClick={handlerSaveConfig}>Save</button></div>
          <div><button onClick={handlerTapacStyle}>Tapac style</button></div>
          <div className="colors">
            <div className="big-block">
              <h1>Color:</h1>
              {
                colors?.length ? (colors.map((el) => (
                  <div>
                    {el === 'g' ? <div onClick={() => handlerColor(el)} className="color-green sm-blocks-c"></div> : <div></div>}
                    {el === 'o' ? <div onClick={() => handlerColor(el)} className="color-orange sm-blocks-c"></div> : <div></div>}
                    {el === 'b' ? <div onClick={() => handlerColor(el)} className="color-black sm-blocks-c"></div> : <div></div>}
                    {el === 'r' ? <div onClick={() => handlerColor(el)} className="color-red sm-blocks-c"></div> : <div></div>}
                    {el === 'w' ? <div onClick={() => handlerColor(el)} className="color-white sm-blocks-c"></div> : <div></div>}
                  </div>
                ))) : <div></div>
              }
              {/* <div className="color-red sm-blocks-c"></div>
              <div className="color-white sm-blocks-c"></div>
              <div className="color-black sm-blocks-c"></div>
              <div className="color-green sm-blocks-c"></div>
              <div className="color-orange sm-blocks-c"></div> */}
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
          <select onChange={handerChooseCar} className="car-brand">
            <option value="default"></option>
            <option value="v">Volkswagen</option>
          </select>
          <select onChange={handlerChooseModel} className="car-brand-models">
            <option value="default"></option>
            <option value="g">Golf</option>
          </select>
          <button onClick={handlerChoose}>Choose</button>
        </div>
      )
  )
}

export default Configurator
