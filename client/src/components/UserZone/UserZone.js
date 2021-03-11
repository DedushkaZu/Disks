import './UserZone.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadBasket, deleteItemFromBasketInDb, changeConfigStatus } from '../../redux/actionCreators/user';
import React360 from '../React360/React360'

const UserZone = () => {
  const [currentConfig, setCurrentConfig] = useState({});
  const disks = useSelector(state => state.basket);
  const userID = window.localStorage.getItem('userID');
  const [configurator, setConfigurator] = useState(false);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBasket(userID))
  }, [])

  const handlerDelete = (e, path) => {
    e.stopPropagation();
    dispatch(deleteItemFromBasketInDb(path));

  };

  const handlerConfig = async (path, numImages) => {
    // dispatch(changeConfigStatus());
    await setConfigurator(prev => !prev);
    setCurrentConfig({ path, numImages })
  };

  const handlerCloseConfigurator = async () => {
    // dispatch(changeConfigStatus());
    await setConfigurator(prev => !prev);
  };

  return (
    <div>
      <div>
      </div>
      {configurator ?
        <div className='configurator-wrapper'>
          <React360 dir={currentConfig.path} numImages={currentConfig.numImages} />
          <div className="close-button-container">
            <button onClick={handlerCloseConfigurator} className='button-delete-disk'>Закрыть</button>
          </div>
        </div>
        :
        <div className='user-disks-container'>
          {disks.map((el, index) =>
            <div key={index} className="flip">
              <div className="front" style={{ 'backgroundImage': `url(${el.photo})` }}>
              </div>
              <div onClick={(e) => { handlerConfig(el.path, el.numImages) }} className="back">
                <div className="content-container">
                  <h5>{el.name}</h5>
                </div>
                <div className="content-container">
                  <p>Нажмите для просмотра конфигурации</p>
                </div>
                <div className="content-container">
                  <button onClick={(e) => { handlerDelete(e, el.path) }} className="button-delete-disk"><p>Удалить</p></button>
                </div>
              </div>
            </div>
          )}
        </div>
      }

    </div>
  );
}

export default UserZone;
