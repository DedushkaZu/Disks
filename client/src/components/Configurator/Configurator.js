import { useEffect } from 'react'
import './Configurator.css'

function Configurator() {
  useEffect(() => {
    window.CI360.init();
  }, [])
  return (
    <>
      <div className="cloudimage-360" data-folder="./images/m-d1/" data-filename="m-d1-{index}.jpg" data-amount="12"
      >
      </div>
    </>
  )
}

export default Configurator
