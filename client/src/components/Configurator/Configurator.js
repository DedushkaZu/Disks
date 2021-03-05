import { useEffect } from 'react'
import './Configurator.css'

function Configurator() {
  useEffect(() => {
    window.CI360.init();
  }, [])

  return (
    <>
      <div className="cloudimage-360" data-folder="./images/g-d1/" data-filename="g-d1-{index}.jpg" data-amount="20"
      >
      </div>
    </>
  )
}

export default Configurator
