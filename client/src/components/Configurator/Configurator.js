import './Configurator.css';
import React360 from '../React360/React360'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { saveConfig } from '../../redux/actionCreators/user';
import { useHistory } from 'react-router-dom';

function Configurator() {
  const succesfull = useSelector(state => state.wrongAuthData)
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
  const history = useHistory();

  const name = window.localStorage.getItem('name');

  if (!name) {
    history.push('/')
  }

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


  const handlerSaveConfig = () => {
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
        {
          succesfull ?
            <h1>Сохранение прошло успешно</h1> :
            <></>
        }
        <div className="options-container">
          <input type="checkbox" id="menu" />
          <label htmlFor="menu" className="icon">
            <div className="menu"></div>
          </label>
          <nav className="config-nav">
            <ul className="config-ul">
              <div className="save-car-button-cotainer">
                <div className=""><button className="save-car-button btn btn-light btn-sm" onClick={handlerSaveConfig}>Сохранить</button></div>
              </div>
              {
                tapacStyle ?
                  (<div>
                    <li>
                      <div><button  className="btn btn-light btn-sm tapac-style-btn" onClick={handlerTapacStyle}>Tapac style</button></div>
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
                                        <img className="" src={smallDisks[index]} alt={`disk${index}`} />
                                      </div>) :
                                      (<div key={index} onClick={() => handlerDisk(index + 1, bigDisks[index], namesDisks[index])} className="item active ">
                                        <img className="sm-disk-img" src={smallDisks[index]} alt={`disk${index}`} />
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
            <React360 dir={`cars/T/v/g/d1/o/`} numImages={24} /> :
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
                <button onClick={(e) => handlerChoose(e, 'v', 'g', 'g')}>Touareg</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="img-container">
                  <img src="https://pngimg.com/uploads/lada/lada_PNG95.png" alt="brand1" />
                </div>
                <br />
                <h3>Lada</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <button onClick={(e) => handlerChoose(e, 'v', 'g', 'g')}>Vesta</button>
                <button onClick={(e) => handlerChoose(e, 'v', 'g', 'g')}>Niva</button>
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
                <button onClick={(e) => handlerChoose(e, 'm', 'e', 'b')}>S-classe</button>
                <button onClick={(e) => handlerChoose(e, 'm', 'e', 'b')}>E-classe</button>
                <button onClick={(e) => handlerChoose(e, 'm', 'e', 'b')}>G-classe</button>
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
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>M8 Coupe</button>
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>Z4</button>
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>3</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="img-container">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="brand3" />
                </div>
                <h3>Tesla</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>Model 3</button>
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>Cybertruck</button>
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>Model S</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="img-container">
                  <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/7/7f/Chevrolet_new_logo.png/1200px-Chevrolet_new_logo.png" alt="brand3" />
                </div>
                <br />
                <h3>Chevrolet</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>Tahoe </button>
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>Camaro</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="img-container">
                  <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/c/c0/SkodaLogo.png/166px-SkodaLogo.png" alt="brand3" />
                </div>
                <h3>Škoda</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>Octavia </button>
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>Rapid</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="img-container">
                  <img src="https://автолого.рф/wp-content/uploads/kia-symbol-2560x1440.png" alt="brand3" />
                </div>
                <br />
                <h3>KIA</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>Rio </button>
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>Cerato</button>
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>Ceed</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="img-container">
                  <img src="https://upload.wikimedia.org/wikipedia/ru/archive/1/17/20090512213331%21Mazda_Logo.png" alt="brand3" />
                </div>
                <h3>Mazda</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>Mazda 6</button>
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>CX-5</button>
                <button onClick={(e) => handlerChoose(e, 'b', 'z', 'b')}>CX-30</button>
              </div>
            </div>
          </div>
        </div>
      )
  )
}

export default Configurator
