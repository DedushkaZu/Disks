import './Configurator.css';
import React360 from '../React360/React360'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Configurator() {
  const [car, setCar] = useState('images/m-d1')
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
  return (
    <div className='configurator-container'>
      {
        chooseCar ? (
          <div>
          <React360  dir={car} numImages={12}/>
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
      }
    </div>
  )
}

export default Configurator
