import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Login from './components/Login'
import Header from './routes/Header'
import LoadingComponent from './components/LoadingComponent'
import AuthenticatedComponent from './components/AuthenticatedComponent'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <LoadingComponent>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/login" component={Login} exact={true} />
                        <AuthenticatedComponent>
                            <Route path="/" component={App} exact={true} />
                        </AuthenticatedComponent>
                    </Switch>
                </div>
            </LoadingComponent>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
