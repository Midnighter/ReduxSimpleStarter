import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from "../actions";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };

        this.onInputChange = (event) => {
            this.setState({term: event.target.value});
        };

        this.onFormSubmit = (event) => {
            event.preventDefault();
            this.props.fetchWeather(this.state.term);
            this.setState({term: ''});
        };
    }

   render() {
       return (
         <form onSubmit={this.onFormSubmit} className="input-group">
             <input
                 placeholder="Get a five-day forecast for your favorite city."
                 className="form-control"
                 value={this.state.term}
                 onChange={this.onInputChange}
             />
             <span className="input-group-btn">
                 <button type="submit" className="btn btn-secondary">Search</button>
             </span>
         </form>
       );
   }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// Container doesn't need state, only to create an action.
export default connect(null, mapDispatchToProps)(SearchBar);