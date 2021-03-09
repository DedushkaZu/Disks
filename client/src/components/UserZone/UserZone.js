import './UserZone.css';
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
      <div>
        configurators:
         <div>
          {disks.map(el =>
            <div className="card">
              <img src={el.photo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{el.path}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserZone;
