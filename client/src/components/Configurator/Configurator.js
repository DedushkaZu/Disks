import { useEffect, useState } from 'react'
import './Configurator.css'

function Configurator() {
  const [car, setCar] = useState('./images/m-d1/')
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    console.log(car);
    // window.CI360.destroy();
    window.CI360.init();
    console.log(car);
    return () => {
      window.CI360.destroy();
    }
  }, [flag])

  // useEffect(() => {
  //   window.CI360.init();
  // }, [])


  function handlerDisks1() {
    setCar('./images/m-d1/')
  }

  function handlerDisks2() {
    setCar('./images/m-d2/')
  }

  function test() {
    console.log(flag);
    if (flag)
      setFlag(false)
    else
      setFlag(true)
  }

  return (
    <div>
      {flag ?
        <div className="cloudimage-360" data-folder='./images/m-d2/' data-filename="car-{index}.jpg" data-amount="12" data-hide-360-logo='true'
        >
        </div>
        // <div>1</div>
        :
        <div className="cloudimage-360" data-folder='./images/m-d1/' data-filename="car-{index}.jpg" data-amount="12" data-hide-360-logo='true'
        >
        </div>
        // <div>2</div> 
      }


      <button onClick={test}>fdsfs</button>
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
