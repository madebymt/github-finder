import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {throwStatement} from '@babel/types';

export class Search extends Component {

    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === "") {
            this
                .props
                .setAlert('Please enter text to search', 'light')
        } else {
            this
                .props
                .searchUsers(this.state.text)
            this.setState({text: ''})

        }

    }
    render() {
        const {showClear, clearUsers} = this.props;
        return (
            <div>
                <form className='form' onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name='text'
                        value={this.state.text}
                        onChange={this.onChange}
                        placeholder="search here...."/>
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>
                {showClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>
}

            </div>
        )
    }
}

export default Search
