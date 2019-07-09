import React, {Component} from 'react'

export class Search extends Component {

    state = {
        text: ''
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name='text'
                        value={this.state.text}
                        placeholder="search here...."/>
                    <input type="submit" value="search" className="btn btn-dark btn-block"/>
                </form>

            </div>
        )
    }
}

export default Search
