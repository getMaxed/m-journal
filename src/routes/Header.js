import React, {Component} from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser, logout} from '../actions/userAction'

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    MyMoments
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="navbar-nav mr-auto">
                        {
                            this.props.user === null ? (
                                <li className="nav-item"><Link to="/login" className = "nav-link">Login</Link></li>
                            ) : (
                                <li className="nav-item"><Link to="/logout" className = "nav-link" onclick={this.props.logout()}>Logout</Link></li>
                            )
                        }

                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    getUser,
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)