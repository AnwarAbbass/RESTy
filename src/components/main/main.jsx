import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../../App';
import History from '../history/render';
import Help from '../Help/Help';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/help" component={Help} />
                    <Route exact path="/history" component={History} />
                    <Route path="*">
                        <div>404</div>
                    </Route>
                </Switch>
            </main>
        );
    }
}

export default Main;