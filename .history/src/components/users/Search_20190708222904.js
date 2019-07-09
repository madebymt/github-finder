import React, {Component} from 'react'
import {throwStatement} from '@babel/types';

export class Search extends Component {

    state = {
        text: ''
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmit = e => {}
    render() {
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

            </div>
        )
    }
}

export default Search
