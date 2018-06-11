import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

export default class PageBody extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" render={() => (<div>Home</div>)}/>
          <Route path="/about" render={() => (<div>About</div>)}/>
          <Route path="/content" render={() => (<div>Content</div>)}/>
          <Route render={() => (<div>Not Found</div>)}/>
        </Switch>
      </div>

    )
  }
}