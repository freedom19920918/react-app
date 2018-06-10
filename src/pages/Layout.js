import React, {Component} from 'react';

export default class Layout extends Component {
    render() {
        return (
            <div>
              <div className="page-wrapper">
                 <div className="page-header"></div>
                  <div className="page-content-wrapper">
                      <div className="page-sidebar"></div>
                      <div className="page-body"></div>
                  </div>
                 <div className="page-footer"></div>
              </div>
            </div>
        )
    }
}