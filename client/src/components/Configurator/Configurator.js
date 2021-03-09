import './Configurator.css';
import React360 from '../React360/React360'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveConfig } from '../../redux/actionCreators/user';


function Configurator() {
  const cars = useSelector(state => state.cars);
  const [tapacStyle, setTapacStyle] = useState(false)
  const [chooseCar, setChooseCar] = useState(false);
  const [brand, setBrand] = useState('v')
  const [model, setModel] = useState('g')
  const [disk, setDisk] = useState('d1')
  const [color, setColor] = useState('g')
  const photoCount = cars[brand][model].photoCount
  const colors = cars[brand][model].color;
  const [currentLinkDisk, setCurrentLinkDisk] = useState('');
  const [currentNameDisk, setCurrentNameDisk] = useState('');
  const dispatch = useDispatch();


  const disks = cars[brand][model].disks;
  const smallDisks = cars[brand][model].linkDisksSmall;
  const bigDisks = cars[brand][model].linkDisksBig;
  const namesDisks = cars[brand][model].nameDisks;


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
    setBrand(`${choosenBrand}`)
  }

  function handlerChooseModel(e) {
    const choosenModel = e.target.value
    setModel(`${choosenModel}`)
  }

  function handlerColor(value) {
    setColor(value);
  }


  const handlerSaveConfig = () => {
    dispatch(saveConfig({
      path: `cars/${brand}/${model}/${disk}/${color}/`,
      numImages: photoCount,
      photo: currentLinkDisk,
      name: currentNameDisk
    }));
  };

  function handlerDisk(value, linkImageDisk, nameDisk) {
    setDisk(`d${value}`);
    setCurrentLinkDisk(linkImageDisk);
    setCurrentNameDisk(nameDisk);
  }

  console.log(currentNameDisk);


  return (
    chooseCar ? (
      <div className="configurator-wrapper">
        <div className="options-container">
          <input type="checkbox" id="menu"/>
          <label for="menu"  className="icon">
                  <div  className="menu"></div>
          </label>

          <nav className="config-nav">
              <ul className="config-ul">
                  {
                    tapacStyle ? 
                    (<>
                      <li>
                        <div><button className="btn btn-light btn-sm tapac-style-btn" onClick={handlerTapacStyle}>Tapac style</button></div>
                      </li>
                      <li>
                        <div className="choose-car-button">
                          <button className="btn btn-light btn-sm" onClick={handlerChoose}>Choose anorther car</button>
                        </div>
                      </li>
                      <li>
                          <div><button className="btn btn-light btn-sm" onClick={handlerSaveConfig}>Save</button></div>
                      </li>
                    </>
                    ) :
                    (
                    <>  
                      <li>
                        <div><button className="btn btn-light btn-sm tapac-style-btn" onClick={handlerTapacStyle}>Tapac style</button></div>
                      </li>
                      <li>
                        <div className="colors">
                          <div className="big-block">
                            {
                              colors?.length ? (colors.map((el, index) => (
                                <div key={index}>
                                  {el === 'g' ? <div onClick={() => handlerColor(el)} className="color-green sm-blocks-c"></div> : <div></div>}
                                  {el === 'o' ? <div onClick={() => handlerColor(el)} className="color-orange sm-blocks-c"></div> : <div></div>}
                                  {el === 'b' ? <div onClick={() => handlerColor(el)} className="color-black sm-blocks-c"></div> : <div></div>}
                                  {el === 'r' ? <div onClick={() => handlerColor(el)} className="color-red sm-blocks-c"></div> : <div></div>}
                                  {el === 'w' ? <div onClick={() => handlerColor(el)} className="color-white sm-blocks-c"></div> : <div></div>}
                                </div>
                              ))) : <div></div>
                            }
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="disks">
                          <div className="big-block">
                            {
                              disks?.length ? (disks.map((el, index) => (
                                <div key={index}>
                                  <div onClick={() => handlerDisk(index + 1, bigDisks[index], namesDisks[index])} className="disk sm-blocks-d"><img className="sm-blocks-d-img" src={smallDisks[index]} alt="disk"></img></div>
                                </div>
                              ))) : <div></div>
                            }
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="choose-car-button">
                          <button className="btn btn-light btn-sm" onClick={handlerChoose}>Choose anorther car</button>
                        </div>
                      </li>
                      <li>
                          <div><button className="btn btn-light btn-sm" onClick={handlerSaveConfig}>Save</button></div>
                      </li>
                    </>  
                    )
                  }
              </ul>
          </nav>
        </div>
        {
          tapacStyle ?
          <React360 dir={`cars/T/v/g/d1/o/`} numImages={23} /> :
          <React360 dir={`cars/${brand}/${model}/${disk}/${color}/`} numImages={photoCount} />
        }
      </div>
      ) :
      (
          <div className="container">
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <div className="img-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg" alt="brand1" />
                  </div>
                  <h3>Volkswagen</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <button onClick={handlerChoose}>Golf</button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <div className="img-container">
                    <img src="http://pngimg.com/uploads/mercedes_logos/mercedes_logos_PNG3.png" alt="brand2" />
                  </div>
                  <h3>Mercedes</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <button onClick={handlerChoose}>S-classe</button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="face face1">
                <div className="content">
                  <div className="img-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/600px-BMW_logo_%28gray%29.svg.png" alt="brand3" />
                  </div>
                  <h3>BMW</h3>
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
      )
  )
}

export default Configurator
