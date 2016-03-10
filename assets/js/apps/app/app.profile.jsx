import React from 'react';
// import { Link } from 'react-router';
// import classnames from 'classnames';
// import R from 'ramda';


const Profile = ({ className="" }) => {
  return (
    <div className={"profile " + className}>
      <div className="profile-img">
        <img src="img/profile.jpg"/>
      </div>
      <h6 className="profile-title">
        Felicity S.
      </h6>
      <small className="profile-subtitle">
        fshagwell@powers.com
      </small>
    </div>
  );
};

Profile.propTypes = {
  displayName: "App.Profile.Component"
};

export default Profile;
