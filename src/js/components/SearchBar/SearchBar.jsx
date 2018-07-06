import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchWeather} from './searchBarActions';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleShortcut = this.handleShortcut.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) { //callback func
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(fetchWeather(this.state.term));
        this.setState({ term: ''}); //clears field input after submitting it

    }

    handleClick(event) {
        const { dispatch, cityData } = this.props;
        dispatch(fetchWeather(this.state.value))
    }

    handleShortcut(event) {
        const { dispatch } = this.props;
        dispatch(fetchWeather(event.target.value))
    }

    render() {
        return (
            <div>
                <button className="btn btn-secondary mb-2" 
                        value="San Diego"
                        onClick={this.handleShortcut} 
                        type="submit">San Diego
                </button>
                <button className="btn btn-secondary mb-2" 
                        value="New York"
                        onClick={this.handleShortcut} 
                        type="submit">New York
                </button>
                <button className="btn btn-secondary mb-2" 
                        value="Boston"
                        onClick={this.handleShortcut} 
                        type="submit">Boston
                </button>
                <button className="btn btn-secondary mb-2" 
                        value="New Jersey"
                        onClick={this.handleShortcut} 
                        type="submit">New Jersey
                </button>
                <button className="btn btn-secondary mb-2" 
                        value="Fountain Valley"
                        onClick={this.handleShortcut} 
                        type="submit">Fountain Valley
                </button>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                        placeholder="Get a forecast in your favorite cities"
                        className="form-control mb-5"
                        value={this.state.term}
                        onChange={this.onInputChange} />
                    <span className='input-group-btn'>
                        <button type="submit" className="btn btn-secondary mb-5">Search</button>
                    </span>
                </form>
            </div>
        );
    }
}

// function MapdispatchToProps(dispatch) {
//     return bindActionCreators({fetchWeather}, dispatch);
// }

// export default connect(null, mapDispatchToProps)(SearchBar);
