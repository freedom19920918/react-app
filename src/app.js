import React, {Component} from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider}from 'mobx-react';
import {syncHistoryWithStore} from 'mobx-react-router';
import {Router} from 'react-router';
import stores from './stores';

import Layout from './pages/layout/Layout';

const history = syncHistoryWithStore(createBrowserHistory(), stores.routing);

class App extends Component {
    render() {
        return (
            <Provider {...stores}>
                <Router history={history}>
                    <Layout/>
                </Router>
            </Provider>
        );
    }
}

export default App;
