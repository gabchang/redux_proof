import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import R from 'ramda';

const links = [
  // { label: 'Todo',      to: "/todo", icon: 'today' },
  // { label: 'Reddit',    to: "/reddit", icon: 'bookmark_border' },
  { label: 'Rank-it',   to: "/rankit", icon: 'star' },
  { label: 'Dashboard', to: "/dashboard", icon: 'dashboard' },
  { label: 'Modules',   to: '',           icon: 'verified_user' },
  { label: 'Courses',   to: '',           icon: 'subscriptions' },
  { label: 'Members',   to: '',           icon: 'contacts' },
  { label: 'Media',     to: '',           icon: 'theaters' },
  { label: 'Mailings',  to: '',           icon: 'mail_outline' },
  { label: 'Report',    to: '',           icon: 'timeline' },
  { label: 'Settings',  to: '',           icon: 'settings' },
];


const Menu = ({location}) => {
  const pathname = location.pathname;
  return (
    <div className="navbar">
      <ul className="nav nav-pills nav-stacked">
        { R.map( ({ label, to, icon }) => {
          return (
            <li key={label} className="nav-item">
              <Link to={to} className={classnames('nav-link', {active: pathname == to })}>
                <i className="mi">{icon}</i> {label}
              </Link>
            </li>
          );
        }, links)}
      </ul>
    </div>
  );
  // AS A LIST-GROUP
  // <div>
  //   <div><a className="menu-brand" href="/">RedUX</a></div>
  //   <div className="list-group">
  //     <Link to="/todo" className={classnames('list-group-item', {active: pathname == '/todo'})}>Todo</Link>
  //     <Link to="/reddit" className={classnames('list-group-item', {active: pathname == '/reddit'})}>Reddit</Link>
  //     <Link to="/rankit" className={classnames('list-group-item', {active: pathname == '/rankit'})}>Rank-it</Link>
  //     <Link to="/dashboard" className={classnames('list-group-item', {active: pathname == '/dashboard'})}>Dashboard</Link>
  //   </div>
  // </div>
  //
  // AS A UL/LI WITH NAV-ITEMS
  // <ul>
  //   <li className={classnames({active: pathname == '/todo'})}>
  //     <Link to="/todo" className="nav-item nav-link">Todo</Link>
  //   </li>
  //   <li className={classnames({active: pathname == '/reddit'})}>
  //     <Link to="/reddit" className="nav-item nav-link">Reddit</Link>
  //   </li>
  //   <li className={classnames({active: pathname == '/rankit'})}>
  //     <Link to="/rankit" className="nav-item nav-link">Rank-it</Link>
  //   </li>
  // </ul>
};

Menu.propTypes = {
//  displayName: "App.Menu.Component"
};

export default Menu;
