import './Configurator.css';
import React360 from '../React360/React360'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Configurator() {

  const [car, setCar] = useState('images/m-d1')
  // const history = useHistory();
  // useEffect(() => {
  //   window.CI360.destroy();
  //   window.CI360.init();
  //   console.log(car);
  //   return () => {
  //     window.CI360.destroy();
  //   }
  // }, [car])

  // // useEffect(() => {
  // //   window.CI360.init();
  // // }, [])

  function handlerDisks1() {
    setCar('images/m-d1')
  }

  function handlerDisks2() {
    setCar('images/m-d2')
  }

  return (
    <div>
      <React360 dir={car} numImages={12} />
      <div className="cloudimage-360" data-folder={car} data-filename="car-{index}.jpg" data-amount="12" data-hide-360-logo='true' />
      <div>{car}</div>

      <button onClick={handlerDisks1}>disk 1</button>
      <button onClick={handlerDisks2}>disk 2</button>
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
  )
}

export default Configurator
