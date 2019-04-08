import React, { Component } from 'react';
import Articles from './components/Articles';
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Articles />
      </div>
    );
  }
}