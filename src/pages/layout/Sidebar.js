import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><NavLink to='/home/dashboard'>Dashboard</NavLink></li>
          <li>sdff</li>
          <li>sdff</li>
        </ul>
      </div>
    )
  }
}