import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar.js';

class App extends React.Component {
    handleTermChange(term) {
        console.log(term);
    }
    render() {
        return (
            <div className="test">
                <SearchBar onTermChange={this.handleTermChange}/>
                <ul>
                    <li>HEY</li>
                    <li>HEY</li>
                    <li>HEY</li>
                    <li>HEY</li>
                    <li>HEY</li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));