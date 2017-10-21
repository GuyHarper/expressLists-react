import React from 'react';
import ReactDOM from 'react-dom';

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <main className="container">
        <h1>Hello World</h1>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
