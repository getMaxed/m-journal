import React, {Component} from 'react'

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
                    <button className="btn btn-danger btn-lg">
                        Login with Google
                    </button>
                </div>

                <div className="col-sm-6">
                    <button className="btn btn-success btn-lg">
                        Login with Twitter
                    </button>
                </div>

            </div>
        )
    }
}

export default Login