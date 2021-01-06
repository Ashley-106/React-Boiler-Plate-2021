import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Test from '../components/Test';

const AppRouter = () => {
    return <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={Test} exact={true}/>
                    </Switch>
                </div>
            </BrowserRouter>;
};

export default AppRouter;