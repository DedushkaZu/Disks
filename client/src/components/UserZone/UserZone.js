import './UserZone.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadBasket } from '../../redux/actionCreators/user';
import React360 from '../React360/React360'

const UserZone = () => {
  const disks = useSelector(state => state.basket);
  const userName = window.localStorage.getItem('name');
  const userID = window.localStorage.getItem('userID');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBasket(userID))
  }, [])

  console.log(disks);
  return (
    <div>
      <div>
        <h3>{userName}</h3>
      </div>
      <div className='user-disks-container'>
        {disks.map(el =>
          <div class="flip">
            <div class="front" style={{ 'background-image': `url(${el.photo})` }}>
              <h1 class="text-shadow">MOUNTAIN</h1>
            </div>
            <div class="back">
              <h2>Angular</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserZone;
