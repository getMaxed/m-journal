import React, {Component} from 'react'
import {connect} from 'react-redux'
import {googleLogin, twitterLogin} from '../actions/userAction'

class Login extends Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="row text-centered">
                    <div className="col-sm-12 jumbotron">
                        <h1>Login with Social Network</h1>
                    </div>
                </div>

                <div className="col-sm-6">
                    <button className="btn btn-danger btn-lg" onClick={this.props.googleLogin}>
                        Login with Google
                    </button>
                </div>

                    <br />

                <div className="col-sm-6">
                    <button className="btn btn-success btn-lg" onClick={this.props.twitterLogin}>
                        Login with Twitter
                    </button>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = {
    googleLogin,
    twitterLogin
}

export default connect(null, mapDispatchToProps)(Login)