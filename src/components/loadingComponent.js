import React, {Component} from 'react'
import {connect} from 'react-redux'

import {withRouter} from 'react-router-dom'
import {getUser} from '../actions/userAction'
import {getNotes} from '../actions/notesAction'

class LoadingComponent extends Component {
    componentWillMount() {
        const {userLoading, notesLoading} = this.props
        if (userLoading === undefined) {
            this.props.getUser()
        }

        if (notesLoading === undefined) {
            this.props.getNotes()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.notesLoading === -1 && nextProps.user !== null) {
            this.props.getNotes()
        }
    }

    render() {
        const {userLoading, notesLoading, user} = this.props
        if ((!userLoading && !notesLoading) || this.props.user === null) {
            return <div>{children}</div>
        } else {
            return <div><h2>Loading...</h2></div>
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        userLoading: state.loading.user,
        notesLoading: state.loading.notes
    }
}

const mapDispatchToProps = {
    getUser,
    getNotes
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoadingComponent))