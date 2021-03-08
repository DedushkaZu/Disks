import './Configurator.css';
import React360 from '../React360/React360'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getAllCars } from '../../redux/actionCreators/cars';

function Configurator() {
  const cars = useSelector(state => state.cars);
  const [car, setCar] = useState('')
  let models = {};
  let currentModel = {};
  const [chooseCar, setChooseCar] = useState(false);


  function handlerDisks1() {
    setCar('images/m-d1')
  }

  function handlerDisks2() {
    setCar('images/m-d2')
  }

  const handlerChoose = () => {
    setChooseCar(true)
  }

  function handerChooseCar(e) {
    models = cars[e.target.value]
    console.log(models);
  }

  function handlerChooseModel(e) {
    currentModel = models[e.target.value]
    console.log(currentModel);
  }

  return (
    <div className='configurator-container'>
      {
        chooseCar ? (
          <div>
            <React360 dir={car} numImages={12} />
            <div className="container">
              <ul>
                <li>
                  <input onChange={handlerDisks1} type="radio" id="f-option" name="selector" />
                  <label htmlFor="f-option">Диски 1</label>
                  <div className="check"></div>
                </li>


                <li>
                  <input onChange={handlerDisks2} type="radio" id="s-option" name="selector" />
                  <label htmlFor="s-option">Диски 2</label>
                  <div className="check"><div className="inside"></div></div>
                </li>

              </ul>
            </div>
          </div>
        ) :
          (
            <div>
              <select onChange={handerChooseCar} className="car-brand">
                <option value="default"></option>
                <option value="m">Mercedes</option>
              </select>
              <select onChange={handlerChooseModel} className="car-brand-models">
                <option value="default"></option>
                <option value="s">S-class</option>
              </select>
              <button onClick={handlerChoose}>Choose</button>
            </div>
          )
      }
    </div>
  )
}

export default Configurator
