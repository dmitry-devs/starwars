import React, { Component } from 'react';
import StarWars from './modules/StarWars';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className={'app__wrapper'}>
                    <Route path="/" component={StarWars} />
                </div>
            </Router>
        );
    }
}

export default App;
