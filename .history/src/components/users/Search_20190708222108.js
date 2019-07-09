import React, {Component} from 'react'
import {throwStatement} from '@babel/types';

export class Search extends Component {

    state = {
        text: ''
    }

    onchange = (e) => {
        this.setState({text: e.target.value})

    }
    render() {
        return (
            <div>
                <form>
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
