import './UserZone.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadBasket, deleteItemFromBasketInDb, changeConfigStatus } from '../../redux/actionCreators/user';
import React360 from '../React360/React360'

const UserZone = () => {
  const [currentConfig, setCurrentConfig] = useState({});
  const disks = useSelector(state => state.basket);
  const configurator = useSelector(state => state.config);
  const userName = window.localStorage.getItem('name');
  const userID = window.localStorage.getItem('userID');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBasket(userID))
  }, [])

  const handlerDelete = (path, userID) => {
    dispatch(deleteItemFromBasketInDb(path, userID));
    console.log(userID);
  };

  const handlerConfig = (path, numImages) => {
    dispatch(changeConfigStatus());
    setCurrentConfig({ path, numImages })
  };

  const handlerCloseConfigurator = () => {
    dispatch(changeConfigStatus());
  };

  return (
    <div>
      <div>
        <h3>{userName}</h3>
      </div>
      {configurator ?
        <>
          <React360 dir={currentConfig.path} numImages={currentConfig.numImages} />
          <button onClick={handlerCloseConfigurator} className='btn btn-danger'>Закрыть</button>
        </>
        :
        <div className='user-disks-container'>
          {disks.map((el, index) =>
            <div key={index} className="flip">
              <div className="front" style={{ 'backgroundImage': `url(${el.photo})` }}>
              </div>
              <div onClick={(e) => { handlerConfig(el.path, el.numImages) }} className="back">
                <h5>{el.name}</h5>
                <button onClick={() => { handlerDelete(el.path, userID) }} className='btn btn-danger'><p>Удалить</p></button>
              </div>
            </div>
          )}
        </div>
      }

    </div>
  );
}

export default UserZone;
