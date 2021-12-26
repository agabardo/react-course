import React from 'react';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (<ul className={`${props.className} ${classes.usersList}`}>
    {props.users.map((user) => {
      <li>{user.name} { user.age}</li>
    })}
  </ul>)
};

export default UsersList;