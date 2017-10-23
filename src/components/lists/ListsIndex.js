import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class ListsIndex extends React.Component {
  state = {
    lists: []
  }

  componentWillMount() {
    Axios
      .get('/api/lists')
      .then(res => this.setState({ lists: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <section className="container">
        {this.state.lists.length === 0 &&
          <div className="centered">
            <p>No lists to display</p>
            <div><Link to="/lists/new">Make a new list</Link></div>
          </div>
        }
        <ul>
          {this.state.lists.map(list => {
            return(
              <li key={list.id}><Link to={`/lists/${list.id}`}>{list.name}</Link></li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ListsIndex;
