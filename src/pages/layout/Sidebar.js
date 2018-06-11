import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="">
        <ul>
          <li><NavLink to='/home'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/content'>Content</NavLink></li>
        </ul>
      </div>
    )
  }
}