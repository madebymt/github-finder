import React, {Component} from 'react'

export class Search extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name='text' placeholder="search here...."/>
                    <input type="submit" value="search" class="btn btn-dark btn-block"/>
                </form>

            </div>
        )
    }
}

export default Search
