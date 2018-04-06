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

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            MyMoments
       </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to="/login" className = "nav-link">Login</Link></li>
            </ul>
        </div>
    </nav>
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={App} exact={true} />
                    <Route path="/login" component={Login} exact={true} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
