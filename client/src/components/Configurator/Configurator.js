import './Configurator.css';
import React360 from '../React360/React360'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromBasketInDb, saveConfig } from '../../redux/actionCreators/user';


function Configurator() {
  const cars = useSelector(state => state.cars);
  const [tapacStyle, setTapacStyle] = useState(false)
  const [chooseCar, setChooseCar] = useState(false);
  const [brand, setBrand] = useState(null)
  const [model, setModel] = useState(null)
  const [disk, setDisk] = useState('d1')
  const [color, setColor] = useState(null)
  const [photoCount, SetPhotoCount] = useState(null);
  const [colors, setColors] = useState(null)
  const [currentLinkDisk, setCurrentLinkDisk] = useState('');
  const [currentNameDisk, setCurrentNameDisk] = useState('');
  const [disks, setDisks] = useState(null);
  const [smallDisks, setSmallDisks] = useState(null);
  const [bigDisks, setBigDisks] = useState(null);
  const [namesDisks, setNamesDisks] = useState(null);


  const dispatch = useDispatch();

  const handlerTapacStyle = () => {
    setTapacStyle(!tapacStyle)
  }

  useEffect(() => {
    if (brand) {
      SetPhotoCount(cars[brand][model].photoCount);
      setColors(cars[brand][model].color);
      setDisks(cars[brand][model].disks);
      setSmallDisks(cars[brand][model].linkDisksSmall);
      setBigDisks(cars[brand][model].linkDisksBig);
      setNamesDisks(cars[brand][model].nameDisks);
    }
  }, [brand])

  useEffect(() => {
    if (bigDisks) {
      setCurrentLinkDisk(bigDisks[0]);
      setCurrentNameDisk(namesDisks[0]);
      setChooseCar(!chooseCar);
    }
  }, [bigDisks])
  
  const handlerChoose = (e, currentBrand, currentModel, currentColor) => {
    if (!currentBrand) {
      setDisk('d1');
      setChooseCar(!chooseCar);
    }
    setBrand(currentBrand);
    setModel(currentModel);
    setColor(currentColor);
    setBigDisks(null);
  }

  function handlerColor(value) {
    setColor(value);
  }


  const handlerSaveConfig = async () => {
      dispatch(saveConfig({
        path: `cars/${brand}/${model}/${disk}/${color}/`,
        numImages: photoCount,
        photo: currentLinkDisk,
        name: currentNameDisk,
      }));
  };

  function handlerDisk(value, linkImageDisk, nameDisk) {
    setDisk(`d${value}`);
    setCurrentLinkDisk(linkImageDisk);
    setCurrentNameDisk(nameDisk);
  }


  return (
    chooseCar ? (
      <div className="configurator-wrapper">
        <div className="options-container">
          <input type="checkbox" id="menu" />
          <label htmlFor="menu" className="icon">
            <div className="menu"></div>
          </label>
          <nav className="config-nav">
            <ul className="config-ul">
              <div className="save-car-button-cotainer">
                <div className=""><button className="save-car-button" onClick={handlerSaveConfig}>Сохранить</button></div>
              </div>
              {
                tapacStyle ?
                  (<div>
                    <li>
                      <div><button className="btn btn-light btn-sm tapac-style-btn" onClick={handlerTapacStyle}>Tapac style</button></div>
                    </li>
                  </div>
                  ) :
                  (
                    <>
                      <li>
                        <div><button className="btn btn-light btn-sm tapac-style-btn" onClick={handlerTapacStyle}>Tapac style</button></div>
                      </li>
                      <li>
                        <div className="colors">
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
                      </li>
                      <li>
                        <div className="disks">
                          <div className="carousel-container">
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                              <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                              </ol>

                              <div className="carousel-inner"> 
                              {
                                disks && disks.map((el, index) => (
                                  index ?
                                    (<div key={index} onClick={() => handlerDisk(index + 1, bigDisks[index], namesDisks[index])} className="item ">
                                      <img className="" src={smallDisks[index]} alt={`disk${index}`}/>
                                    </div>):
                                    (<div key={index} onClick={() => handlerDisk(index + 1, bigDisks[index], namesDisks[index])} className="item active ">
                                      <img className="sm-disk-img" src={smallDisks[index]} alt={`disk${index}`}/>
                                    </div>)
                                ))
                              } 
                              </div>

                              <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="glyphicon glyphicon-chevron-left"></span>
                                <span className="sr-only">Previous</span>
                              </a>
                              <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <span className="glyphicon glyphicon-chevron-right"></span>
                                <span className="sr-only">Next</span>
                              </a>
                            </div>
                          </div>
                        </div>
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
        <div className="choose-car-button">
          <button className="btn btn-light btn-sm" onClick={(e) => handlerChoose(e, null, model)}>Вернуться назад</button>
        </div>
      </div>
    ) :
      (
        <div className="choose-container">
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
                <button onClick={(e) => handlerChoose(e, 'v', 'g', 'g')}>Golf</button>
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
                <button onClick={(e) => handlerChoose(e, 'm', 'e', 'b')}>E-classe</button>
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
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>Z4</button>
              </div>
            </div>
          </div>
        </div>
      )
  )
}

export default Configurator
