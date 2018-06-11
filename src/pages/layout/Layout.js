import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="page-wrapper">
          <div className="page-header">
            <Header/>
          </div>
          <div className="page-content-wrapper">
            <div className="page-sidebar">
              <Sidebar/>
            </div>
            <div className="page-body">

            </div>
          </div>
          <div className="page-footer">
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}