import React, { Component } from 'react';
import { database } from '../firebase'
import _ from 'lodash'
import { connect } from 'react-redux'
import {getNotes, saveNotes} from '../actions/notesAction'

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            notes: {}
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderNotes = this.renderNotes.bind(this)
    }

    componentDidMount() {
        this.props.getNotes()
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const note = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.saveNote()
        this.setState({
            title: '',
            body: ''
        })
    }

    renderNotes() {
        return _.map(this.state.notes, (note, key) => {
            return (
                <div key={key}>
                    <h2>{note.title}</h2>
                    <p>{note.body}</p>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-6 col-sm-offset-3">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    onChange={this.handleChange}
                                    value={this.state.title}
                                    type="text"
                                    name="title"
                                    className="form-control no-border"
                                    placeholder="Title..."
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    onChange={this.handleChange}
                                    value={this.state.body}
                                    type="text"
                                    name="body"
                                    className="form-control no-border"
                                    placeholder="Body..."
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary col-sm-12">Save</button>
                            </div>
                        </form>
                        {this.renderNotes()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        notes: state.notes
    }
}

function mapDispatchToProps() {
    return {
        getNotes,
        saveNotes
    }
}

export default connect(mapStateToProps, {getNotes, saveNotes})(App);
