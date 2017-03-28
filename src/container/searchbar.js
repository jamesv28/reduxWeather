import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);   // bind the context of this in the callback
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();
    // this is where we need to go to and collect our data fetch
    //  API KEY: 4694127c3ed57c34c8c1b877357f194a
    this.props.fetchWeather(this.state.term);
    //  clear out the searchbar
    this.setState({
      term: ''
    });

  }

  render() {
    return (
      <div className="row">
        <form className="input-field" onSubmit={this.onFormSubmit}>
          <input
          type="text"
          placeholder="Get a 5 day forecast"
           className="col s8 m8"
           value={this.state.term}
           onChange={this.onInputChange }/>
          <button type="submit" className="waves-effect waves-light btn purple accent-4" >Search </button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
