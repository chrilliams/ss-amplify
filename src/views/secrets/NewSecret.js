import React, { Component } from 'react';

export default class NewSecret extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <div className="container-fluid">
          <h1 data-testid="title" className="h3 mb-4 text-gray-800">
            New Secret
          </h1>
        </div>
      </>
    );
  }
}