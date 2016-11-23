import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    onInputChange(term) {
        this.setState({ term });
        this.props.onTermChange(term);
    }
    render() {
        return (
            <div className="search">
                <input type="text" onChange={event => this.onInputChange(event.target.value)} />
            </div>
        )
    }
}

export default SearchBar;


https://blog.tighten.co/react-101-building-a-gif-search-engine