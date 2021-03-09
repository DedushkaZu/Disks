import './UserZone.css';
import React360 from '../React360/React360'

const UserZone = () => {
  const userName = window.localStorage.getItem('name')
  console.log(userName);
  return (
    <div>
      <div>
        <h3>{userName}</h3>
      </div>
      <div>
        configurators:
         <div>
          {/* <React360 /> */}
        </div>
      </div>
    </div>
  );
}

export default UserZone;
