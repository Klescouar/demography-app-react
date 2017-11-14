import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import MortalityList from '../containers/mortality-list'

const defaultCountry = 'France';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar defaultCountry={defaultCountry}/>
        <MortalityList/>
      </div>
    );
  }
}
